import { useRecoilCallback } from 'recoil'
import { useState } from 'react'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { deleteTodayActionsByActionGroupId } from '@/api/action-groups/delete-today-actions-by-action-group-id.api'
import { GetActionGroupRes } from '@/api/action-groups/index.interface'
import { deleteYesterdayActionsByActionGroupId } from '@/api/action-groups/delete-yesterday-action-by-action-group-id.api'

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
          let data: GetActionGroupRes | null = null
          if (which === `today`) {
            data = (await deleteTodayActionsByActionGroupId(actionGroupId))[0]
          } else {
            data = (
              await deleteYesterdayActionsByActionGroupId(actionGroupId)
            )[0]
          }
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
