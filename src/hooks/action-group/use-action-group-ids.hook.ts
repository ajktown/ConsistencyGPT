import { getActionGroupIds as getRitualById } from '@/api/action-groups/get-action-group-ids.api'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useRitual = () => {
  const onGetActionGroups = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const [res] = await getRitualById()
          set(actionGroupIdsState, res.actionGroupIds)
        } catch {
          set(actionGroupIdsState, [])
        }
      },
    [],
  )

  return onGetActionGroups
}
