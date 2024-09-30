import { FC, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { Box, Typography } from '@mui/material'

const PRIVATE_GREEN = `#00e676`
const PRIVATE_GREEN_DARK_MODE = `#00c853`
const PRIVATE_MIAMI_BLUE = `#54C3EA`

interface Props {
  percent: number
}

const BorderLinearProgress = styled(LinearProgress)<{ value: number }>(
  ({ theme, value }) => ({
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
      backgroundColor: value === 100 ? PRIVATE_GREEN : PRIVATE_MIAMI_BLUE,
      ...theme.applyStyles(`dark`, {
        backgroundColor: value === 100 ? PRIVATE_GREEN_DARK_MODE : `#f5f5f5`, // Lighter white for dark theme
      }),
    },
  }),
)

/**
 * StyledProgressBarMolecule renders a progress bar with a percentage
 */
const StyledProgressBarMolecule: FC<Props> = ({ percent }) => {
  const [animatedPercent, setAnimatedPercent] = useState(percent)

  useEffect(() => {
    const start = animatedPercent
    const duration = 600 // Animation duration in milliseconds
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1) // Clamp to 1

      // Linear interpolation between start and target percent
      const newPercent = Math.round(start + (percent - start) * progress)
      setAnimatedPercent(newPercent)

      if (progress < 1) {
        requestAnimationFrame(animate) // Continue animation if not done
      }
    }

    requestAnimationFrame(animate)
  }, [percent, animatedPercent])

  return (
    <Box minWidth={200} alignItems={`center`}>
      <BorderLinearProgress variant="determinate" value={percent} />
      <Typography>{`${animatedPercent}%`}</Typography>
    </Box>
  )
}

export default StyledProgressBarMolecule
