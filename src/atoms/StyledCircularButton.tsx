import { styled, Button, Typography, TypographyProps } from '@mui/material'
import { FC } from 'react'

interface Props {
  title?: string
  loading?: boolean
  radius: number // pixels
  bgColor?: string // color of the circle
  onClick?: any
  typoProps: TypographyProps
}
const PRIVATE_BG_COLOR = `white`
const StyledCircularButton = styled(Button)<Props>(({ radius, bgColor }) => ({
  minWidth: `${radius}px`, // Use size prop
  height: `${radius}px`, // Use size prop
  padding: 0,
  borderRadius: `50%`,
  backgroundColor: bgColor || PRIVATE_BG_COLOR, // Use bgColor prop for background color
  color: `white`,
  fontSize: radius / 2, // Adjust font size based on the button size
  '&:hover': {
    backgroundColor: `darkgreen`,
  },
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
}))

const StyledCircularButtonAtom: FC<Props> = (props) => {
  return (
    <StyledCircularButton {...props} disabled={props.loading}>
      <Typography {...props.typoProps}>{props.title}</Typography>
    </StyledCircularButton>
  )
}

export default StyledCircularButtonAtom
