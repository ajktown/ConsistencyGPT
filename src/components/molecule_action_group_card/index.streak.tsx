import StyledTextWithHeaderIcon from '@/atoms/StyledTextWithHeaderIcon'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import StreakIcon from '@mui/icons-material/ElectricBolt'
interface Props {
  id: string
}

const ActionGroupCardStreak: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))

  if (!actionGroup) return null
  if (actionGroup.streak === 0) return null // if 0, it should probably not remind the user

  return (
    <StyledTextWithHeaderIcon
      headerIcon={<StreakIcon color="warning" fontSize="small" />}
      textProps={{
        fontFamily: `Cormorant Garamond`,
        variant: `caption`,
      }}
      title={`${actionGroup.streak}`}
    />
  )
}

export default ActionGroupCardStreak
