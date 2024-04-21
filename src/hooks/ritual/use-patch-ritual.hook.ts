import { useRecoilCallback } from 'recoil'
import {
  PatchRitualGroupBodyDTO,
  patchRitualApi,
} from '@/api/rituals/patch-ritual.api'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'

export const usePatchRitual = () => {
  const onPatchRitual = useRecoilCallback(
    ({ set }) =>
      async (dto: Partial<PatchRitualGroupBodyDTO>) => {
        try {
          const [data] = await patchRitualApi(dto)
          set(actionGroupIdsState, data.ritual.orderedActionGroupIds)
        } catch {}
      },
    [],
  )

  return onPatchRitual
}
