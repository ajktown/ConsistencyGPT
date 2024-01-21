import { FC } from 'react'
import { Stack } from '@mui/material'
import ReactActivityCalendar, { Activity } from 'react-activity-calendar'

const activities: Activity[] = []

const startDate = new Date(`2024-01-01`)
const endDate = new Date(`2024-12-31`)

for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
  activities.push({
    date: d.toISOString().split(`T`)[0],
    count: 1, // Default value, replace with actual data
    level: 0, // Default value, replace with actual data
  })
}

const WordCardFrame: FC = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        {/* Body */}
        <ReactActivityCalendar data={activities} />
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default WordCardFrame
