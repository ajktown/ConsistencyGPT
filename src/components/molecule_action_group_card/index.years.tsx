import StyledTextButtonAtom from '@/atoms/StyledTextButton'
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

  const yearsArray = Array.from(
    // like this: [2024, 2023, 2022 ...]
    { length: endYear - actionGroup.props.firstYear + 1 },
    (_, i) => endYear - i,
  )

  // TODO: Make sure that the buttons are not yet clickable as the API does not handle it yet!
  return (
    <Stack alignItems="center" spacing={0.5}>
      {yearsArray.map((year) => (
        <StyledTextButtonAtom
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
