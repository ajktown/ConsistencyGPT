import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { envLambda } from '@/lambdas/get-env.lambda'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { Stack, Typography } from '@mui/material'
import { FC, Fragment } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardSpecialMessage: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))

  if (actionGroup?.props.id !== ActionGroupFixedId.DailyPostWordChallenge)
    return null

  if (actionGroup.isTodayHandled)
    return (
      <Typography fontFamily={`Cormorant Garamond`}>
        {`You have accomplished posting a daily word. Keep up the good work!`}
      </Typography>
    )

  return (
    <Stack mt={1}>
      <Typography color="warning" fontFamily={`Cormorant Garamond`}>
        {`It seems like you have not added your daily word yet. Consistency is the key in your success.`}
      </Typography>
      <Typography fontFamily={`Cormorant Garamond`}>
        {`Please go visit ${envLambda.getWordnoteUrl()} and add a word for today.`}
      </Typography>
    </Stack>
  )
}

export default ActionGroupCardSpecialMessage
