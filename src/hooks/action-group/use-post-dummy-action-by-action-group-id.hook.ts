import { useRecoilCallback } from 'recoil'
import { useState } from 'react'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { postActionByActionGroupIdApi } from '@/api/action-groups/post-action-by-action-group-id.api'

type UsePostDummyActionByActionGroupId = [boolean, () => Promise<void>]
export const usePostDummyActionByActionGroupId = (
  actionGroupId: string,
): UsePostDummyActionByActionGroupId => {
  const [loading, setLoading] = useState(false)

  const onPostDummyActionByActionGroupId = useRecoilCallback(
    ({ set }) =>
      async () => {
        try {
          setLoading(true)
          const [data] = await postActionByActionGroupIdApi(actionGroupId, {
            isDummy: true,
          })
          set(actionGroupFamily(data.props.id), data)
        } finally {
          setLoading(false)
        }
      },
    [actionGroupId, setLoading],
  )
  return [loading, onPostDummyActionByActionGroupId]
}
