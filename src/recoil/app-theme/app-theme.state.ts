import { atom } from 'recoil'
import { Rkp } from '@/recoil/index.keys'
import { DateTime } from 'luxon'

/**
 * Manage the state of the app theme to mimic the GitHub's Halloween theme
 */

export enum AppTheme {
  Basic = `basic`,
  NewYear = `new-year`,
  Halloween = `halloween`,
  Christmas = `christmas`,
}

const isWithinRange = (date: DateTime<true> | DateTime<false>) => {
  const now = DateTime.now()
  // Theme is applied within the range: 13 days before and 1 day after the given date:
  // const start = date.minus({ days: 13 })
  // const end = date.plus({ days: 1 })
  return now >= date.minus({ days: 13 }) && now <= date.plus({ days: 1 })
}

const newYear = DateTime.fromObject({ month: 1, day: 1 }).endOf(`day`)
const halloween = DateTime.fromObject({ month: 10, day: 31 }).endOf(`day`)
const christmas = DateTime.fromObject({ month: 12, day: 25 }).endOf(`day`)
const defaultTheme = ((): AppTheme => {
  // TODO: The following themes will be implemented in the future:
  if (isWithinRange(newYear)) return AppTheme.NewYear // Happy New Year theme
  // if (isWithinRange(valentines)) return AppTheme.Valentines // Love theme
  // if (isWithinRange(spring)) return AppTheme.Spring // Cherry blossom theme
  // if (isWithinRange(summer)) return AppTheme.Summer // Beach theme
  if (isWithinRange(halloween)) return AppTheme.Halloween
  if (isWithinRange(christmas)) return AppTheme.Christmas // Christmas theme

  // Default:
  return AppTheme.Basic
})()

export const appThemeState = atom<AppTheme>({
  key: Rkp.AppTheme,
  default: defaultTheme,
  // default: AppTheme.Christmas, // You can always override the default theme here, and compile will fail if you forget to remove it
})
