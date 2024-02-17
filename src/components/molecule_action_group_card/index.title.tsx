import { timeHandler } from '@/handlers/time.handler'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { Typography } from '@mui/material'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}

const ActionGroupCardTitle: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const title = actionGroup
    ? `"${actionGroup.props.task}" between ${timeHandler.getPrettyDate(actionGroup.props.openAt)} ~ ${timeHandler.getPrettyDate(actionGroup.props.closeAt)}`
    : `Unknown Consistency`

  return (
    <Typography
      variant="h6"
      fontStyle={`italic`}
      fontFamily={`Cormorant Garamond`}
    >
      {title}
    </Typography>
  )
}

export default ActionGroupCardTitle
