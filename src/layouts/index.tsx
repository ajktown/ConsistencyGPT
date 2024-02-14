import { FC, Fragment, useCallback } from 'react'
import ActivityCalendarDailyPostWordFrame from '@/components/organism_activity_calendar_frame/index.daily-post-word-challenge'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import FirstTimeUserWelcomeMessage from '@/components/molecule_first_time_user_welcome_message'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import ActivityCalendarFrame from '@/components/organism_activity_calendar_frame'
import { useActionGroupIds } from '@/hooks/action-group/use-action-group-ids.hook'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'

const HomeLayout: FC = () => {
  const onGetActionGroupIds = useActionGroupIds()

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroupIds()])
  }, [onGetActionGroupIds])

  const actionGroupIds = useRecoilValue(actionGroupIdsState)

  return (
    <Fragment>
      <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
      <ErrorApiConnectionFail />
      <FirstTimeUserWelcomeMessage />
      {actionGroupIds.map((id) => (
        <ActivityCalendarFrame key={id} id={id} />
      ))}
      <ActivityCalendarDailyPostWordFrame />
    </Fragment>
  )
}

export default HomeLayout
