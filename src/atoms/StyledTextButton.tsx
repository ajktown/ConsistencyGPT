import { FC } from 'react'
import { Tooltip, Box, SxProps, Theme } from '@mui/material'
import {
  GlobalMuiColor,
  GlobalMuiPlacement,
  GlobalMuiVariant,
} from '../global.interface'
import { LoadingButton } from '@mui/lab'

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

const StyledTextButtonAtom: FC<StyledTextButtonProps> = ({
  onClick,
  ...props
}) => {
  return (
    <Box>
      <Tooltip
        title={props.hoverMessage?.title ?? ``}
        placement={props.hoverMessage?.placement ?? `bottom`}
      >
        <span style={{ cursor: !props.hoverMessage ? undefined : `help` }}>
          <LoadingButton
            variant={props.variant ?? `outlined`}
            size="small"
            disabled={props.isDisabled}
            loading={props.isLoading}
            color={props.color ?? `inherit`}
            onClick={onClick}
            sx={{
              textTransform: `none`,
              ...props.sx,
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
