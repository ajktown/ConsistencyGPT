import StyledCircularButtonAtom from '@/atoms/StyledCircularButton'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { usePostActionByActionGroupId } from '@/hooks/action-group/use-post-action-by-action-group-id.hook'
import { getDoneColorLambda } from '@/lambdas/get-app-theme-color.lambda'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { appThemeState } from '@/recoil/app-theme/app-theme.state'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardButton: FC<Props> = ({ id }) => {
  const appTheme = useRecoilValue(appThemeState)
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
      bgColor={getDoneColorLambda(appTheme)}
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
