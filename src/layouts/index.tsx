import { FC, Fragment } from 'react'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import FirstTimeUserWelcomeMessage from '@/components/molecule_first_time_user_welcome_message'
import RitualsFrame from '@/components/organism_rituals_frame'

const HomeLayout: FC = () => {
  return (
    <Fragment>
      <ErrorApiConnectionFail />
      <FirstTimeUserWelcomeMessage />
      <RitualsFrame />
    </Fragment>
  )
}

export default HomeLayout
