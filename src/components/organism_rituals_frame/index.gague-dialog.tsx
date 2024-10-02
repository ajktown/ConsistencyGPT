import { FC, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { actionGroupAchievedPercentSelector } from '@/recoil/action-groups/action-groups.selectors'
import StyledDialog from '@/organisms/StyledDialog'
import { DialogContent, DialogTitle, Stack } from '@mui/material'
import StyledProgressBarMolecule from '@/molecules/StyledProgressBar'

/**
 * RitualsFrameGauge shows a simple molecule sized gauge for user's achievement for today
 * @param param0
 * @returns
 */
const RitualsFrameGaugeDialog: FC = () => {
  const [open, setOpen] = useState(false)
  const [visual, setVisual] = useState<number>(0)
  const percentage = useRecoilValue(actionGroupAchievedPercentSelector)

  useEffect(() => {
    if (visual === percentage) return // if it is the same, we should not show anything!

    // if percentage changes, open it for two seconds, and close it
    setTimeout(() => setOpen(true), 400)
    setTimeout(() => setVisual(percentage), 850)
    setTimeout(() => setOpen(false), 2500)
  }, [visual, percentage])

  if (!open) return null

  return (
    <StyledDialog>
      <DialogTitle>{`Your Achievement Today`}</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <StyledProgressBarMolecule percent={visual} />
        </Stack>
      </DialogContent>
    </StyledDialog>
  )
}

export default RitualsFrameGaugeDialog
