import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import ActivityCalendar from '@/components/molecule_activity_calendar'
import RefreshButton from '../atom_refresh_button'
import AskToAddWordButton from '../atom_ask_to_add_word_button'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { useOpenNewTab } from '@/hooks/use-open-new-tab'

const WORDNOTE_GPT_URL = `https://wordnote.ajktown.com`

const ActivityCalendarFrame: FC = () => {
  const onOpenNewTab = useOpenNewTab(WORDNOTE_GPT_URL)
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
            {`Your consistency for creating word card this year`}
          </Typography>
          <RefreshButton />
        </Stack>
        {/* Body */}
        <ActivityCalendar />
        <AskToAddWordButton />
        <StyledTextButtonAtom
          title="Visit wordnote.ajktown.com"
          onClick={onOpenNewTab}
        />
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default ActivityCalendarFrame
