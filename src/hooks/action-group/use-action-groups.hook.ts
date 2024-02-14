import { getActionGroupDailyPostWordChallengeApi } from '@/api/action-groups/get-action-group-daily-post-word-challenge.api'
import { actionGroupDailyPostWordChallengeState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useActionGroups = () => {
  const onGetActionGroups = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const [res] = await getActionGroupDailyPostWordChallengeApi()
          set(actionGroupDailyPostWordChallengeState, res)
        } catch {
          set(actionGroupDailyPostWordChallengeState, null)
        }
      },
    [],
  )

  return onGetActionGroups
}
