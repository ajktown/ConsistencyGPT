import StyledCircularButtonAtom from '@/atoms/StyledCircularButton'
import { usePostActionByActionGroupId } from '@/hooks/action-group/use-post-action-by-action-group-id.hook'
import { isActionGroupPunchableSelector } from '@/recoil/action-groups/action-groups.selectors'
import { getDoneColorLambda } from '@/lambdas/get-app-theme-color.lambda'
import { appThemeState } from '@/recoil/app-theme/app-theme.state'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardButton: FC<Props> = ({ id }) => {
  const isActionGroupPunchable = useRecoilValue(
    isActionGroupPunchableSelector(id),
  )
  const appTheme = useRecoilValue(appThemeState)
  const [loading, onPostActionByActionGroupId] =
    usePostActionByActionGroupId(id)

  if (!isActionGroupPunchable) return null

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
