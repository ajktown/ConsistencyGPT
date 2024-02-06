import { FC } from 'react'
import { Stack } from '@mui/material'
import ActivityCalendar from '@/components/molecule_activity_calendar'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'

const ActivityCalendarFrame: FC = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        {/* Body */}
        <ActivityCalendar />
        <Stack>
          <StyledTextButtonAtom
            title="POST /api/v1/action"
          />
        </Stack>
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default ActivityCalendarFrame
