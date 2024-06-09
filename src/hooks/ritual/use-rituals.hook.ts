import {
  GetRitualsRes,
  getRitualsApi as getRitualById,
} from '@/api/rituals/get-rituals.api'
import { getUserRitualsApi } from '@/api/users/get-user-rituals.api'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useRituals = () => {
  const onGetRituals = useRecoilCallback(
    ({ set }) =>
      async (nickname?: string) => {
        try {
          let res: GetRitualsRes | null = null

          if (nickname) res = (await getUserRitualsApi({ nickname }))[0]
          // only archived action groups are requested by default atm:
          else res = (await getRitualById({ isArchived: false }))[0]

          if (!res || res.rituals.length === 0) return

          set(actionGroupIdsState, res.rituals[0].actionGroupIds)
        } catch {
          set(actionGroupIdsState, [])
        }
      },
    [],
  )

  return onGetRituals
}
