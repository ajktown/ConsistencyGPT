import { Box, Typography, TypographyProps } from '@mui/material'
import { FC, ReactNode } from 'react'

/**
 * Returns
 */

interface Props {
  headerIcon: ReactNode
  textProps?: TypographyProps
  title?: string
}
const StyledTextWithHeaderIcon: FC<Props> = ({
  headerIcon,
  textProps,
  title,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      textAlign="center"
    >
      {headerIcon}
      <Typography {...textProps}>{title}</Typography>
    </Box>
  )
}

export default StyledTextWithHeaderIcon
