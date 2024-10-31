import { FC, useMemo } from 'react'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { AppTheme, appThemeState } from '@/recoil/app-theme/app-theme.state'

const AppbarMainLogo: FC = () => {
  const appTheme = useRecoilValue(appThemeState)
  const src = useMemo(() => {
    if (appTheme === AppTheme.Halloween)
      return `/app_theme/halloween-cute-pumpkin.png`

    return `/favicon_archived/android-chrome-512x512.png`
  }, [appTheme])
  return (
    <Image
      src={src}
      alt="logo"
      width={30}
      height={30}
      style={{ marginRight: 8 }}
    />
  )
}

export default AppbarMainLogo
