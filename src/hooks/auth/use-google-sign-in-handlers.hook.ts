// credentialResponse: CredentialResponse

import { postAuthGoogleApi } from '@/api/auth/post-auth-by-google.api'
import { DEFAULT_MAIN_APP_PAGE } from '@/constants/pages.constant'
import { CredentialResponse } from '@react-oauth/google'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useAuthPrep } from './use-auth-prep.hook'

type PrivateOnSuccess = (credentialResponse: CredentialResponse) => void
type PrivateOnError = () => void

type UseGoogleSignInHandlers = [PrivateOnSuccess, PrivateOnError]

export const useGoogleSignInHandlers = (): UseGoogleSignInHandlers => {
  const router = useRouter()
  const onGetAuthPrep = useAuthPrep()

  const onSuccess: PrivateOnSuccess = useCallback(
    async (cr: CredentialResponse) => {
      try {
        await postAuthGoogleApi(cr)
        router.push(DEFAULT_MAIN_APP_PAGE)
        onGetAuthPrep()
      } catch {
        throw new Error(`something went wrong`)
      }
    },
    [router, onGetAuthPrep],
  )

  const onError: PrivateOnError = useCallback(() => {
    console.log(`onError; ContinueWithGoogle`) // TODO: implement
  }, [])

  return [onSuccess, onError]
}
