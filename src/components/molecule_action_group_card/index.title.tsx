import { timeHandler } from '@/handlers/time.handler'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { Typography } from '@mui/material'
import { FC, useMemo } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}

const ActionGroupCardTitle: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))

  const title = useMemo(() => {
    if (!actionGroup) return `Unknown Consistency`

    // if value diff is the 24 hours, then it's a whole day task
    if (
      new Date(actionGroup.props.closeAt).valueOf() -
        new Date(actionGroup.props.openAt).valueOf() ===
      24 * 60 * 60 * 1000
    ) {
      return `"${actionGroup.props.task} (whole day today)`
    }

    return `"${actionGroup.props.task}" (between ${timeHandler.getPrettyDate(actionGroup.props.openAt)} ~ ${timeHandler.getPrettyDate(actionGroup.props.closeAt)})`
  }, [actionGroup])

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
