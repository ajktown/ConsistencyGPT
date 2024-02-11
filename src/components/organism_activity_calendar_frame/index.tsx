import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import ActivityCalendar from '@/components/molecule_activity_calendar'
import RefreshButton from '../atom_refresh_button'

const ActivityCalendarFrame: FC = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        <Stack alignItems="center" direction={"row"} spacing={0.5} m={2}>
        <Typography variant='h6' fontStyle={"italic"} fontFamily={`Cormorant Garamond`}>
          {`Your consistency for creating word card this year`}
        </Typography>
        <RefreshButton />
        </Stack>
        {/* Body */}

        <ActivityCalendar />
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default ActivityCalendarFrame
