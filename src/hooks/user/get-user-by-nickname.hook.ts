import {
  GetSharedUserRes,
  getUserByNickname,
} from '@/api/users/get-user-by-nickname.api'
import { useState } from 'react'
import { useRecoilCallback } from 'recoil'

type UseUserByNickname = [
  GetSharedUserRes | undefined | null,
  () => Promise<void>,
]
export const useUserByNickname = (
  nickname: string | undefined | string[],
): UseUserByNickname => {
  const [user, setUser] = useState<GetSharedUserRes | undefined | null>(
    undefined,
  )
  const onGetUserByNickname = useRecoilCallback(
    () => async () => {
      try {
        if (!nickname || typeof nickname !== `string`) return

        const [user] = await getUserByNickname({ nickname })
        setUser(user)
      } catch {
        setUser(null)
      }
    },
    [nickname],
  )
  return [user, onGetUserByNickname]
}
