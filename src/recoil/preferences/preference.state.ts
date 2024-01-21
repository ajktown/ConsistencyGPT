import { atom } from 'recoil'
import { Rkp } from '@/recoil/index.keys'
import { IPreference } from '@/api/preferences/index.interface'

/** Private Recoil Key */
enum Prk {
  IsPreferenceDialogOpened = `IsPreferenceDialogOpened`,
  IsShowingArchivedState = `IsShowingArchivedState`,
  IsReviewModeState = `IsReviewModeState`,
}

/** preferenceState holds signed in user's preference data.
 * If not signed in, it is null.
 * If signed in but has no data yet, it can be still null and therefore should be handled.
 */
export const preferenceState = atom<null | IPreference>({
  key: Rkp.Preferences,
  default: null,
})

/** IsPreferenceDialogOpened represents if dialog is opened */
export const isPreferenceDialogOpenedState = atom<boolean>({
  key: Rkp.Preferences + Prk.IsPreferenceDialogOpened,
  default: false,
})

/** isShowingArchivedState represents if end user wants to see the archived words only or not */
export const isShowingArchivedState = atom<boolean>({
  key: Rkp.Preferences + Prk.IsShowingArchivedState,
  default: false,
})

/** isReviewModeState represents if end user is using ReviewMode */
export const isReviewModeState = atom<boolean>({
  key: Rkp.Preferences + Prk.IsReviewModeState,
  default: false,
})
