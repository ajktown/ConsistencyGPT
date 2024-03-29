import { PropsMenuItem } from '@/atoms/StyledIconButtonWithMenu'
import StyledUserAvatar from '@/atoms/StyledUserAvatar'
import { useOnSignOutApp } from '@/hooks/app/use-on-sign-out-app.hook'
import { authPrepState } from '@/recoil/app/app.state'
import { useRouter } from 'next/router'
import { FC, useCallback, useMemo } from 'react'
import { useRecoilValue } from 'recoil'

/** Avatar for the current user that is using the application. This should not be used
 * for other users.
 */
const EndUserAvatar: FC = () => {
  const authPrep = useRecoilValue(authPrepState)
  const router = useRouter()
  const onSignOutApp = useOnSignOutApp()
  const onClickToAdminProfile = useCallback(() => {
    router.push(`/users/mlajkim`)
  }, [router])
  const onClickBuyMeCoffee = useCallback(() => {
    const url = `https://www.buymeacoffee.com/mlajkim`
    window.open(url, `_blank`)
  }, [])

  const menuItems: PropsMenuItem[] = useMemo(
    () => [
      {
        title: `Buy me coffee!`,
        onClick: onClickBuyMeCoffee,
      },
      {
        title: `To mlajkim's profile`,
        onClick: onClickToAdminProfile,
      },
      {
        title: `Sign out`,
        onClick: onSignOutApp,
      },
    ],
    [onSignOutApp, onClickToAdminProfile, onClickBuyMeCoffee],
  )

  return (
    <StyledUserAvatar
      imageUrl={authPrep?.signedInUserInfo?.profileImageUrl ?? undefined}
      menuItems={menuItems}
    />
  )
}

export default EndUserAvatar
