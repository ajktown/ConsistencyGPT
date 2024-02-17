import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC, Fragment } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardSpecialMessage: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))

  if (actionGroup?.props.id !== ActionGroupFixedId.DailyPostWordChallenge)
    return null

  return <Fragment>{`hi`}</Fragment>
}

export default ActionGroupCardSpecialMessage
