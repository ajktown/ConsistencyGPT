import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { Stack } from '@mui/material'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
interface Props {
  id: string
}

const endYear = new Date().getFullYear() // Today's year like 2024

const ActionGroupCardYears: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  if (!actionGroup) return null

  // like this: [2024, 2023, 2022 ...]
  const yearsArray = Array.from(
    { length: endYear - actionGroup.props.firstYear + 1 },
    (_, i) => endYear - i,
  )
  // TODO: Requires a visual that shows a button! 
  // TODO: Test if returned first year 2013 works too!
  // TODO: Make sure that the buttons are not yet clickable as the API does not handle it yet!
  return <Stack alignItems="center">{yearsArray.join(`,`)}</Stack>
}

export default ActionGroupCardYears
