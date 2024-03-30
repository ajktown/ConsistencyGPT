import { useRecoilCallback } from 'recoil'
import { useState } from 'react'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { postActionByActionGroupId } from '@/api/action-groups/post-action-by-action-group-id.api'

type UsePostActionByActionGroupId = [boolean, () => Promise<void>]
export const usePostActionByActionGroupId = (
  actionGroupId: string,
): UsePostActionByActionGroupId => {
  const [loading, setLoading] = useState(false)

  const onPostActionByActionGroupId = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          setLoading(true)
          const [data] = await postActionByActionGroupId(actionGroupId)
          set(actionGroupFamily(data.props.id), data)
        } finally {
          setLoading(false)
        }
      },
    [actionGroupId, setLoading],
  )
  return [loading, onPostActionByActionGroupId]
}
