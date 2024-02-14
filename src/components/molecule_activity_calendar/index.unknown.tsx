import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ActivityCalendarUnknown: FC = () => {
  return (
    <Card style={{ width: `100%`, borderRadius: 9 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`Access to this activity calendar is unavailable; it may have been deleted or not existed at all."`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ActivityCalendarUnknown
