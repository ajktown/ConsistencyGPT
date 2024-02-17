import { getRituals as getRitualById } from '@/api/rituals/get-rituals.api'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useRituals = () => {
  const onGetActionGroups = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const [res] = await getRitualById()
          if (res.rituals.length === 0) return

          set(actionGroupIdsState, res.rituals[0].actionGroupIds)
        } catch {
          set(actionGroupIdsState, [])
        }
      },
    [],
  )

  return onGetActionGroups
}
