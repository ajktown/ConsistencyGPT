import { FC } from 'react'
import { Stack } from '@mui/material'
import ActivityCalendar from '@/components/molecule_activity_calendar'

const WordCardFrame: FC = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        {/* Body */}
        <ActivityCalendar />
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default WordCardFrame
