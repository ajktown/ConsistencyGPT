import { FC } from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { Box, Typography } from '@mui/material'

interface Props {}
// TODO: Move me somewhere else?
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles(`dark`, {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: `#ffffff`, // White for light theme
    ...theme.applyStyles(`dark`, {
      backgroundColor: `#f5f5f5`, // Lighter white for dark theme
    }),
  },
}))

/**
 * RitualsFrameGauge shows a simple molecule sized gauge for user's achievement for today
 * @param param0
 * @returns
 */
const RitualsFrameGauge: FC<Props> = () => {
  const value = 50

  return (
    <Box minWidth={200} alignItems={`center`}>
      <BorderLinearProgress variant="determinate" value={value} />
      <Typography>{`${value}%`}</Typography>
    </Box>
  )
}

export default RitualsFrameGauge
