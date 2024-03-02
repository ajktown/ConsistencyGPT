import { getActionGroupByIdApi } from '@/api/action-groups/get-action-group-by-id.api'
import { GetActionGroupRes } from '@/api/action-groups/index.interface'
import { getUserActionGroupApi } from '@/api/users/get-action-groups.api'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback } from 'recoil'

export const useActionGroupById = (id: string) => {
  const onGetActionGroupById = useRecoilCallback(
    ({ set }) =>
      async (nickname?: string) => {
        try {
          let res: GetActionGroupRes | null = null

          if (nickname)
            res = (
              await getUserActionGroupApi({ groupId: id, nickname: nickname })
            )[0]
          else res = (await getActionGroupByIdApi({ id }))[0]

          if (!res) return
          set(actionGroupFamily(id), res)
        } catch {
          set(actionGroupFamily(id), null)
        }
      },
    [id],
  )
  return onGetActionGroupById
}
