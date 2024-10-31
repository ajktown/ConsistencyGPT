import { FC } from 'react'
import { Tooltip, Box, SxProps, Theme } from '@mui/material'
import {
  GlobalMuiColor,
  GlobalMuiPlacement,
  GlobalMuiVariant,
} from '../global.interface'
import { LoadingButton } from '@mui/lab'
import { getButtonColorLambda } from '@/lambdas/get-app-theme-color.lambda'
import { appThemeState } from '@/recoil/app-theme/app-theme.state'
import { useRecoilValue } from 'recoil'

export interface StyledTextButtonProps {
  title: string
  isLoading?: boolean
  onClick?: any
  isDisabled?: boolean
  color?: GlobalMuiColor
  variant?: GlobalMuiVariant
  hoverMessage?: {
    title: string
    placement?: GlobalMuiPlacement
  }
  IconRight?: JSX.Element // Try to give a space within the jsx element for better usage
  sx?: SxProps<Theme>
}

// TODO: I need to consider how to place the theme because I did not want to introduce business related lambda OR state here.
// TODO: But to bring the consistency, I need to consider the theme here.

const StyledTextButtonAtom: FC<StyledTextButtonProps> = ({
  onClick,
  ...props
}) => {
  const appTheme = useRecoilValue(appThemeState)
  return (
    <Box>
      <Tooltip
        title={props.hoverMessage?.title || ``}
        placement={props.hoverMessage?.placement || `bottom`}
      >
        <span style={{ cursor: !props.hoverMessage ? undefined : `help` }}>
          <LoadingButton
            variant={props.variant || `outlined`}
            size="small"
            disabled={props.isDisabled}
            loading={props.isLoading}
            color={props.color || `inherit`}
            onClick={onClick}
            sx={{
              textTransform: `none`,
              ...getButtonColorLambda(appTheme, props.isDisabled),
            }}
          >
            {props.title}
          </LoadingButton>
        </span>
      </Tooltip>
    </Box>
  )
}

export default StyledTextButtonAtom
