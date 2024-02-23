import { postActionByActionGroupId } from '@/api/action-groups/post-action-by-action-group-id.api'
import StyledCircularButtonAtom from '@/atoms/StyledCircularButton'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC, useState } from 'react'
import { useRecoilCallback, useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardButton: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const [loading, setLoading] = useState(false)

  const onPost = useRecoilCallback(
    // TODO: Write a hook with loading state
    ({ set }) =>
      async () => {
        try {
          setLoading(true)
          const [data] = await postActionByActionGroupId(id)
          set(actionGroupFamily(data.props.id), data)
        } finally {
          setLoading(false)
        }
      },
    [id, setLoading],
  )

  if (!actionGroup?.isOpened || actionGroup.isTodayHandled) return null
  if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
    return null

  return (
    <StyledCircularButtonAtom
      onClick={onPost}
      radius={80}
      bgColor="green"
      title="Done!"
      loading={loading}
      typoProps={{
        color: `white`,
        fontFamily: `Cormorant Garamond`,
      }}
    />
  )
}

export default ActionGroupCardButton
