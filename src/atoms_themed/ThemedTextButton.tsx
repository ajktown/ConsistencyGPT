import { FC } from 'react'
import { getButtonColorLambda } from '@/lambdas/get-app-theme-color.lambda'
import { appThemeState } from '@/recoil/app-theme/app-theme.state'
import { useRecoilValue } from 'recoil'
import StyledTextButtonAtom, {
  StyledTextButtonProps,
} from '@/atoms/StyledTextButton'

const ThemedTextButtonAtom: FC<StyledTextButtonProps> = (props) => {
  const appTheme = useRecoilValue(appThemeState)

  return (
    <StyledTextButtonAtom
      sx={getButtonColorLambda(appTheme, props.isDisabled)}
      {...props}
    />
  )
}

export default ThemedTextButtonAtom
