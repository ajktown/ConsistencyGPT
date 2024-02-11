import { getActionGroupsApi } from '@/api/action-groups/get-action-groups.api'
import { actionGroupsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useActionGroups = () => {
  const onGetActionGroups = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          const [res] = await getActionGroupsApi()
          set(actionGroupsState, res)
        } catch {
          set(actionGroupsState, null)
        }
      },
    [],
  )

  return onGetActionGroups
}
