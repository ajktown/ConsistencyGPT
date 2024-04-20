import { FC } from 'react'
import Appbar from '@/components/organism_appbar'
import SettingFrame from '@/components/organism_setting_frame'

const SettingPage: FC = () => {
  return (
    <Appbar>
      <SettingFrame />
    </Appbar>
  )
}

export default SettingPage
