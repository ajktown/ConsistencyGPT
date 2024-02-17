import { FC, Fragment, useCallback } from 'react'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import FirstTimeUserWelcomeMessage from '@/components/molecule_first_time_user_welcome_message'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import ActionGroupCard from '@/components/molecule_action_group_card'
import { useRitual } from '@/hooks/action-group/use-action-group-ids.hook'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { Stack } from '@mui/material'
import { ActionGroupFixedId } from '@/constants/action-group.constant'

const HomeLayout: FC = () => {
  const onGetRitual = useRitual()

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetRitual()])
  }, [onGetRitual])

  const actionGroupIds = useRecoilValue(actionGroupIdsState)

  return (
    <Fragment>
      <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
      <ErrorApiConnectionFail />
      <FirstTimeUserWelcomeMessage />
      <Stack alignItems={`center`} spacing={1}>
        <ActionGroupCard id={ActionGroupFixedId.DailyPostWordChallenge} />
        {actionGroupIds.map((id) => (
          <ActionGroupCard key={id} id={id} />
        ))}
      </Stack>
    </Fragment>
  )
}

export default HomeLayout
