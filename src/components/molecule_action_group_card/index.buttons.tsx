import StyledCircularButtonAtom from '@/atoms/StyledCircularButton'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { usePostActionByActionGroupId } from '@/hooks/action-group/use-post-action-by-action-group-id.hook'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardButton: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const [loading, onPostActionByActionGroupId] =
    usePostActionByActionGroupId(id)

  if (!actionGroup) return null
  if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
    return null
  if (!actionGroup.derivedState.isOnTimeCommittable) return null

  return (
    <StyledCircularButtonAtom
      onClick={onPostActionByActionGroupId}
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
