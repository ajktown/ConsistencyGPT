import { FC } from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { Box, Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { actionGroupAchievedPercentSelector } from '@/recoil/action-groups/action-groups.selectors'

const PRIVATE_GREEN = `#00e676`
const PRIVATE_GREEN_DARK_MODE = `#00c853`

interface Props {}
// TODO: Move me somewhere else? (Since BorderLinearProgress is used only within this component, this sits here)
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
      backgroundColor: value === 100 ? PRIVATE_GREEN : `#ffffff`, // White for light theme
      ...theme.applyStyles(`dark`, {
        backgroundColor: value === 100 ? PRIVATE_GREEN_DARK_MODE : `#f5f5f5`, // Lighter white for dark theme
      }),
    },
  }),
)

/**
 * RitualsFrameGauge shows a simple molecule sized gauge for user's achievement for today
 * @param param0
 * @returns
 */
const RitualsFrameGauge: FC<Props> = () => {
  const percentage = useRecoilValue(actionGroupAchievedPercentSelector)

  return (
    <Box minWidth={200} alignItems={`center`}>
      <BorderLinearProgress variant="determinate" value={percentage} />
      <Typography>{`${percentage}%`}</Typography>
    </Box>
  )
}

export default RitualsFrameGauge
