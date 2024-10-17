import { FC, Fragment, useCallback } from 'react'
import { Box, Card, Stack, Typography } from '@mui/material'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useActionGroupById } from '@/hooks/action-group/use-action-group-by-id.hook'
import ActivityCalendarById from '../molecule_activity_calendar/index.by-id'
import ActionGroupCardButton from './index.buttons'
import ActionGroupCardTitle from './index.title'
import ActionGroupCardSpecialMessage from './index.special-message'
import ActionGroupCardMoreOptions from './index.more-options'
import ActionGroupCardYears from './index.years'

interface Props {
  id: string
  nickname?: string
}
const ActionGroupCard: FC<Props> = ({ id, nickname }) => {
  const onGetActionGroupById = useActionGroupById(id)

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroupById(nickname)])
  }, [nickname, onGetActionGroupById])

  return (
    <Card sx={{ display: `flex`, flexDirection: `row` }}>
      <Stack m={3}>
        {/* Header */}
        <Stack alignItems="center" direction={`row`} spacing={0.5} m={2}>
          <ActionGroupCardTitle id={id} />
          <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
          <ActionGroupCardMoreOptions id={id} nickname={nickname} />
        </Stack>
        <Stack alignItems="center">
          <ActivityCalendarById id={id} />
          {!nickname && (
            <Fragment>
              <ActionGroupCardButton id={id} />
              <ActionGroupCardSpecialMessage id={id} />
            </Fragment>
          )}
        </Stack>
      </Stack>
      <ActionGroupCardYears id={id} />
    </Card>
  )
}

export default ActionGroupCard
