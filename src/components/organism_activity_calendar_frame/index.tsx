import { FC } from 'react'
import { Stack } from '@mui/material'
import ActivityCalendar from '@/components/molecule_activity_calendar'
import RefreshButton from '../atom_refresh_button'

const ActivityCalendarFrame: FC = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        <RefreshButton />
        {/* Body */}
        <ActivityCalendar />
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default ActivityCalendarFrame
