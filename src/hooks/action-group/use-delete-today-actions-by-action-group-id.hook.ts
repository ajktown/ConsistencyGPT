import { useRecoilCallback } from 'recoil'
import { useState } from 'react'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { deleteTodayActionsByActionGroupId } from '@/api/action-groups/delete-today-actions-by-action-group-id.api'

type UsePostActionByActionGroupId = [boolean, () => Promise<void>]
export const useDeleteTodayActionsByActionGroupId = (
  actionGroupId: string,
): UsePostActionByActionGroupId => {
  const [loading, setLoading] = useState(false)

  const onDeleteTodayActionsByActionGroupId = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          setLoading(true)
          const [data] = await deleteTodayActionsByActionGroupId(actionGroupId)
          set(actionGroupFamily(data.props.id), data)
        } finally {
          setLoading(false)
        }
      },
    [actionGroupId, setLoading],
  )
  return [loading, onDeleteTodayActionsByActionGroupId]
}
