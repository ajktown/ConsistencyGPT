import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import ActivityCalendar from '@/components/molecule_activity_calendar'
import RefreshButton from '../atom_refresh_button'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'

const MockFrame: FC = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        <Stack alignItems="center" direction={`row`} spacing={0.5} m={2}>
          <Typography
            variant="h6"
            fontStyle={`italic`}
            fontFamily={`Cormorant Garamond`}
          >
            {`[name: Wake up by 4:30 am] [timezone: KST] [utc: (UTC+9)]`}
          </Typography>
          <RefreshButton />
        </Stack>
        {/* Body */}
        <ActivityCalendar />
        <Stack alignItems="center" direction="row" spacing={1}>
          <StyledTextButtonAtom title={`Commit Action`} />
          <StyledTextButtonAtom title={`Cannot Perform`} />
        </Stack>
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default MockFrame
