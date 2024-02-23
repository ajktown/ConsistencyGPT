import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { FC, Dispatch } from 'react'

type TimeData = Date | null
interface Props {
  useStateTimePick: [TimeData, Dispatch<React.SetStateAction<TimeData>>]
}
const StyledTimePicker: FC<Props> = ({ useStateTimePick }) => {
  const [time, setTime] = useStateTimePick

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <TimePicker label="Controlled picker" value={time} onChange={setTime} />
    </LocalizationProvider>
  )
}

export default StyledTimePicker
