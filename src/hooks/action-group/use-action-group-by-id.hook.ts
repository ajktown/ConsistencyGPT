import { geActionGroupByIdApi } from '@/api/action-groups/get-action-group-by-id.api'
import {
  actionGroupDailyPostWordChallengeState,
  actionGroupFamily,
} from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useActionGroupById = (id: string) => {
  const onGetActionGroupById = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const [res] = await geActionGroupByIdApi({ id })
          set(actionGroupFamily(id), res)
        } catch {
          set(actionGroupDailyPostWordChallengeState, null)
        }
      },
    [id],
  )

  return onGetActionGroupById
}
