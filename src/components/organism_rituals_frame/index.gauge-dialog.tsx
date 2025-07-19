import { FC, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { actionGroupAchievedPercentSelector } from '@/recoil/action-groups/action-groups.selectors'
import StyledDialog from '@/organisms/StyledDialog'
import { DialogContent, DialogTitle, Stack } from '@mui/material'
import StyledProgressBarMolecule from '@/molecules/StyledProgressBar'
import { PageConst } from '@/constants/pages.constant'
import { useRouter } from 'next/router'
import { preferenceState } from '@/recoil/preferences/preference.state'

/**
 * RitualsFrameGauge shows a simple molecule sized gauge for user's achievement for today
 * @param param0
 * @returns
 */
const RitualsFrameGaugeDialog: FC = () => {
  const [open, setOpen] = useState(false)
  const [visual, setVisual] = useState<number>(0) // visual is the percentage we show in the dialog, for animation purposes
  const percentage = useRecoilValue(actionGroupAchievedPercentSelector)
  const preference = useRecoilValue(preferenceState)

  useEffect(() => {
    if (visual === percentage) return // if it is the same, we should not show anything!

    // if percentage changes, open it for two seconds, and close it
    setTimeout(() => setOpen(true), 400)
    setTimeout(() => setVisual(percentage), 850)
    setTimeout(() => setOpen(false), 2500)
  }, [visual, percentage])

  // if page is NOT PageConst.Home, we should not show anything:
  const router = useRouter()

  if (router.asPath !== PageConst.Home) return null
  if (!preference?.useProgressDialog) return null
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
