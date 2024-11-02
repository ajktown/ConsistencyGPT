import ThemedTextButtonAtom from '@/atoms_themed/ThemedTextButton'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { useOpenNewTab } from '@/hooks/use-open-new-tab'
import { envLambda } from '@/lambdas/get-env.lambda'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { Stack, Typography } from '@mui/material'
import { FC, Fragment } from 'react'
import { useRecoilValue } from 'recoil'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import WarningIcon from '@mui/icons-material/Warning'
import StyledTextWithHeaderIcon from '@/atoms/StyledTextWithHeaderIcon'
interface Props {
  id: string
}
const url = envLambda.getWordnoteUrl()
const ActionGroupCardSpecialMessage: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const onOpenNewTab = useOpenNewTab(url)

  if (!actionGroup) return null

  // TODO: API must return isTodayAccomplished
  if (
    [`EarlyCommitted`, `OnTimeCommitted`, `LateCommitted`].includes(
      actionGroup.state,
    )
  )
    return (
      <StyledTextWithHeaderIcon
        headerIcon={<CheckCircleOutlineIcon color="success" />}
        textProps={{
          fontFamily: `Cormorant Garamond`,
        }}
        title={`You've accomplished the task for today. Keep up the good work!`}
      />
    )
  // TODO: API must return isTodayMissed
  if (
    [
      `EarlyDummyCommitted`,
      `OnTimeDummyCommitted`,
      `LateDummyCommitted`,
      `LateNotCommitted`,
    ].includes(actionGroup.state)
  )
    return (
      <Stack mt={1}>
        <StyledTextWithHeaderIcon
          headerIcon={<WarningIcon color="warning" />}
          textProps={{
            fontFamily: `Cormorant Garamond`,
          }}
          title={`It seems like you've missed the task for today. Remember, consistency is the key in your success.`}
        />
        {actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge && (
          <Fragment>
            <Typography fontFamily={`Cormorant Garamond`}>
              {`Please go visit ${url} and add a word for today.`}
            </Typography>
            <ThemedTextButtonAtom
              title={`Visit ${url}`}
              onClick={onOpenNewTab}
            />
          </Fragment>
        )}
      </Stack>
    )

  return null
}

export default ActionGroupCardSpecialMessage
