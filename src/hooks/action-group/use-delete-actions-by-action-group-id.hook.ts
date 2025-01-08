import { useRecoilCallback } from 'recoil'
import { useState } from 'react'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { deleteTodayActionsByActionGroupId } from '@/api/action-groups/delete-today-actions-by-action-group-id.api'
import { GetActionGroupRes } from '@/api/action-groups/index.interface'
import { deleteYesterdayActionsByActionGroupId } from '@/api/action-groups/delete-yesterday-action-by-action-group-id.api'

// TODO: Not sure where to put this function (or is creating this function necessary?)
const getData = async (actionGroupId: string, which: string) => {
  switch (which) {
    case `today`:
      return (await deleteTodayActionsByActionGroupId(actionGroupId))[0]
    case `yesterday`:
      return (await deleteYesterdayActionsByActionGroupId(actionGroupId))[0]
    default:
      return null
  }
}

type UseDeleteActionsByActionGroupId = [boolean, () => Promise<void>]
export const useDeleteActionsByActionGroupId = (
  actionGroupId: string,
  which: 'today' | 'yesterday', // only two options
): UseDeleteActionsByActionGroupId => {
  const [loading, setLoading] = useState(false)

  const onDeleteActionsByActionGroupId = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          setLoading(true)
          const data: GetActionGroupRes | null = await getData(
            actionGroupId,
            which,
          )
          if (data === null) throw new Error(`data is null`)
          set(actionGroupFamily(data.props.id), data)
        } finally {
          setLoading(false)
        }
      },
    [actionGroupId, which, setLoading],
  )
  return [loading, onDeleteActionsByActionGroupId]
}
