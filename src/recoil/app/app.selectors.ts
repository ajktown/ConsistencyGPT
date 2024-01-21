/**
 * This file contains all the selectors for the app.state.ts
 */

import { Rkp, Rks } from '@/recoil/index.keys'
import { selector } from 'recoil'
import { authPrepState } from './app.state'

/** Private Recoil Key */
enum Prk {
  IsSignedIn = `IsSignedIn`,
  IsFirstTimeUser = `IsFirstTimeUser`,
}

export const isSignedInSelector = selector<boolean>({
  key: Rkp.App + Prk.IsSignedIn + Rks.Selector,
  get: ({ get }) => {
    return get(authPrepState)?.isSignedIn ?? false
  },
})

export const isFirstTimeUserSelector = selector<boolean>({
  key: Rkp.App + Prk.IsFirstTimeUser + Rks.Selector,
  get: ({ get }) => {
    return get(authPrepState)?.signedInUserInfo?.isFirstTimeUser ?? false
  },
})
