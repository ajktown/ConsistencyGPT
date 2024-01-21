import { useRecoilCallback } from 'recoil'
import { useRouter } from 'next/router'
import { PageConst } from '@/constants/pages.constant'
import { postSignOut } from '@/api/auth/post-sign-out.api'
import { preferenceState } from '@/recoil/preferences/preference.state'

export const useOnSignOutApp = () => {
  const router = useRouter()

  const onSignOutApp = useRecoilCallback(
    ({ reset }) =>
      async () => {
        try {
          await postSignOut()
        } finally {
          reset(preferenceState)
          router.push(PageConst.Welcome)

          // TODO: Should set a snackbar for a reason.
        }
      },
    [router],
  )

  return onSignOutApp
}
