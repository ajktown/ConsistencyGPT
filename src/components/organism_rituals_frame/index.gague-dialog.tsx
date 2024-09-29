import { FC, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { useRecoilValue } from 'recoil'
import { actionGroupAchievedPercentSelector } from '@/recoil/action-groups/action-groups.selectors'
import StyledDialog from '@/organisms/StyledDialog'
import {
  Box,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'

const PRIVATE_GREEN = `#00e676`
const PRIVATE_GREEN_DARK_MODE = `#00c853`
const PRIVATE_MIAMI_BLUE = `#54C3EA`

interface Props {}

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
 * RitualsFrameGauge shows a simple molecule sized gauge for user's achievement for today
 * @param param0
 * @returns
 */
const RitualsFrameGaugeDialog: FC<Props> = () => {
  const [open, setOpen] = useState(false)
  const [visual, setVisual] = useState<number>(0)
  const percentage = useRecoilValue(actionGroupAchievedPercentSelector)

  useEffect(() => {
    // if percentage changes, open it for two seconds, and close it
    setTimeout(() => setOpen(true), 400)
    setTimeout(() => setVisual(percentage), 850)
    setTimeout(() => setOpen(false), 1850)
  }, [percentage])

  if (!open) return null

  return (
    <StyledDialog>
      <DialogTitle>{`Your Achievement Today`}</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <Box minWidth={200} alignItems={`center`}>
            <BorderLinearProgress variant="determinate" value={visual} />
            <Typography>{`${visual}%`}</Typography>
          </Box>
        </Stack>
      </DialogContent>
    </StyledDialog>
  )
}

export default RitualsFrameGaugeDialog
