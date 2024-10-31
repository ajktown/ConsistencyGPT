import { atom } from 'recoil'
import { Rkp } from '@/recoil/index.keys'
import { DateTime } from 'luxon'

/**
 * Manage the state of the app theme to mimic the GitHub's Halloween theme
 */

export enum AppTheme {
  Basic = `basic`,
  Halloween = `halloween`,
}

const halloweenStart = DateTime.fromObject({ month: 10, day: 17 }).startOf(
  `day`,
)
const halloweenEnd = DateTime.fromObject({ month: 11, day: 1 }).endOf(`day`)

const defaultTheme = ((): AppTheme => {
  const now = DateTime.now()

  if (now >= halloweenStart && now <= halloweenEnd) return AppTheme.Halloween
  return AppTheme.Basic
})()

export const appThemeState = atom<AppTheme>({
  key: Rkp.AppTheme,
  default: defaultTheme,
})
