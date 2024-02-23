import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DateTime } from 'luxon'
import { FC } from 'react'

interface Props {
  label?: string
  time: null | DateTime
  onChange: (time: null | DateTime) => void
}
const StyledTimePicker: FC<Props> = ({ label, time, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <TimePicker label={label} value={time} onChange={onChange} />
    </LocalizationProvider>
  )
}

export default StyledTimePicker
