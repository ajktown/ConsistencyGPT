import ThemedTextButtonAtom from '@/atoms_themed/ThemedTextButton'
import { isActionGroupPunchableSelector } from '@/recoil/action-groups/action-groups.selectors'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { Stack } from '@mui/material'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
interface Props {
  id: string
}

const endYear = new Date().getFullYear() // Today's year like 2024

const ActionGroupCardYears: FC<Props> = ({ id }) => {
  const isActionGroupPunchable = useRecoilValue(
    isActionGroupPunchableSelector(id),
  )
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  if (!actionGroup) return null // cannot show the year chips as the action group is not loaded yet
  if (isActionGroupPunchable) return null // does not show the year chip so that users can focus on achieving (punching) the goal

  const yearsArray = Array.from(
    // like this: [2024, 2023, 2022 ...]
    { length: endYear - actionGroup.props.firstYear + 1 },
    (_, i) => endYear - i,
  )

  // TODO: Make sure that the buttons are not yet clickable as the API does not handle it yet!
  return (
    <Stack alignItems="center" spacing={0.5}>
      {yearsArray.map((year) => (
        <ThemedTextButtonAtom
          key={year}
          isDisabled={year !== endYear}
          title={year.toString()}
          color={year === endYear ? `primary` : undefined}
        />
      ))}
    </Stack>
  )
}

export default ActionGroupCardYears
