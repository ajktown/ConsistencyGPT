import { FC, Fragment } from 'react'
import ActivityCalendarFrame from '@/components/organism_activity_calendar_frame'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import FirstTimeUserWelcomeMessage from '@/components/molecule_first_time_user_welcome_message'

const HomeLayout: FC = () => {
  return (
    <Fragment>
      <ErrorApiConnectionFail />
      <FirstTimeUserWelcomeMessage />
      <ActivityCalendarFrame />
    </Fragment>
  )
}

export default HomeLayout
