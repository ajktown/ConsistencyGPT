import { Box, Typography, TypographyProps } from '@mui/material'
import { FC } from 'react'

/**
 * Returns
 */

interface Props {
  prefixIcon: React.ReactNode
  textProps: TypographyProps
  title?: string
}
const StyledTextWithPrefixButton: FC<Props> = ({
  prefixIcon,
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
      {prefixIcon}
      <Typography {...textProps}>{title}</Typography>
    </Box>
  )
}

export default StyledTextWithPrefixButton
