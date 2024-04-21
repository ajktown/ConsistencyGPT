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
          console.log(data)
          set(actionGroupIdsState, data.ritual.actionGroupIds)
        } catch {}
      },
    [],
  )

  return onPatchRitual
}
