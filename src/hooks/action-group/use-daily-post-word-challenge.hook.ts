import { getActionGroupDailyPostWordChallengeApi } from '@/api/action-groups/get-action-group-daily-post-word-challenge.api'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useActionGroupDailyPostWordWordChallenge = () => {
  const onGetActionGroups = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const [res] = await getActionGroupDailyPostWordChallengeApi()
          set(actionGroupFamily(ActionGroupFixedId.DailyPostWordChallenge), res)
        } catch {
          set(
            actionGroupFamily(ActionGroupFixedId.DailyPostWordChallenge),
            null,
          )
        }
      },
    [],
  )

  return onGetActionGroups
}
