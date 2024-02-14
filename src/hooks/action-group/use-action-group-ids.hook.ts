import { getActionGroupIds } from '@/api/action-groups/get-action-group-ids.api'
import {
  actionGroupDailyPostWordChallengeState,
  actionGroupIdsState,
} from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useActionGroupIds = () => {
  const onGetActionGroups = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const [res] = await getActionGroupIds()
          set(actionGroupIdsState, res.ids)
        } catch {
          set(actionGroupDailyPostWordChallengeState, null)
        }
      },
    [],
  )

  return onGetActionGroups
}
