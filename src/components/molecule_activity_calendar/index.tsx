import { FC } from 'react'
import ReactActivityCalendar, { Activity } from 'react-activity-calendar'

const activities: Activity[] = []

const startDate = new Date(`2024-01-01`)
const endDate = new Date(`2024-12-31`)

for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
  activities.push({
    date: d.toISOString().split(`T`)[0],
    count: 2, // Default value, replace with actual data
    level: 3, // Default value, replace with actual data
  })
}

const ActivityCalendar: FC = () => {
  return <ReactActivityCalendar data={activities} />
}

export default ActivityCalendar
