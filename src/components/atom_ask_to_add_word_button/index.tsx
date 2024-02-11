import { FC, Fragment } from 'react'
import { useRecoilValue } from 'recoil'
import { actionGroupsState } from '@/recoil/action-groups/acton-groups.state'
import { Typography } from '@mui/material'
import { envLambda } from '@/lambdas/get-env.lambda'
/**
 * A button that asks you to add a word if you have not for today!
 * Currently follows the KST standard.
 */
const AskToAddWordButton: FC = () => {
  const actionGroup = useRecoilValue(actionGroupsState)

  if (actionGroup === undefined) return null
  if (actionGroup === null) return null

  if (actionGroup.isTodayHandled)
    return (
      <Typography fontFamily={`Cormorant Garamond`}>
        {`You have accomplished posting a daily word. Keep up the good work!`}
      </Typography>
    )

  return (
    <Fragment>
      <Typography color="warning" fontFamily={`Cormorant Garamond`}>
        {`It seems like you have not added your daily word yet. Consistency is the key in your success.`}
      </Typography>
      <Typography fontFamily={`Cormorant Garamond`}>
        {`Please go visit ${envLambda.getWordnoteUrl()} and add a word for today.`}
      </Typography>
    </Fragment>
  )
}

export default AskToAddWordButton
