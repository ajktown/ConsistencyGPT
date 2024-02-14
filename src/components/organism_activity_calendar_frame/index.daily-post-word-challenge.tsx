import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import ActivityCalendar from '@/components/molecule_activity_calendar'
import RefreshButton from '../atom_refresh_button'
import AskToAddWordButton from '../atom_ask_to_add_word_button'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { useOpenNewTab } from '@/hooks/use-open-new-tab'
import { envLambda } from '@/lambdas/get-env.lambda'

const ActivityCalendarDailyPostWordFrame: FC = () => {
  const wordnoteUrl = envLambda.getWordnoteUrl()
  const onOpenNewTab = useOpenNewTab(wordnoteUrl)

  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        <Stack alignItems="center" direction={`row`} spacing={0.5} m={2}>
          <Typography
            variant="h6"
            fontStyle={`italic`}
            fontFamily={`Cormorant Garamond`}
          >
            {`Your consistency for posting at least a word card this year`}
          </Typography>
          <RefreshButton />
        </Stack>
        {/* Body */}
        <ActivityCalendar />
        <AskToAddWordButton />
        <StyledTextButtonAtom
          title={`Visit ${wordnoteUrl}`}
          onClick={onOpenNewTab}
        />
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default ActivityCalendarDailyPostWordFrame
