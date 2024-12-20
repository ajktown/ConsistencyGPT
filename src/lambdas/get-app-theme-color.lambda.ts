import { AppTheme } from '@/recoil/app-theme/app-theme.state'
import { SxProps, Theme } from '@mui/material'

enum Basic {
  'one' = `#d4e6cf`,
  'two' = `#a7d4bf`,
  'three' = `#80d1ab`,
  'four' = `#56d197`,
  'five' = `#29cc7f`,
}

enum Halloween {
  'one' = `#ebedf0`,
  'two' = `#ffee4a`,
  'three' = `#ffc500`,
  'four' = `#fe9601`,
  'five' = `#d47901`,
}

enum Christmas {
  'one' = `#fff7f7`,
  'two' = `#ffd4d7`,
  'three' = `#ff99a0`,
  'four' = `#ff4d58`,
  'five' = `#eb0014`,
}

export const getAppThemeColorLambda = (theme?: AppTheme) => {
  if (!theme || theme === AppTheme.Basic)
    return {
      light: [Basic.one, Basic.two, Basic.three, Basic.four, Basic.five],
      dark: [Basic.one, Basic.two, Basic.three, Basic.four, Basic.five],
    }

  // by default halloween as only two options for now:
  if (theme === AppTheme.Halloween) {
    return {
      light: [
        Halloween.one,
        Halloween.two,
        Halloween.three,
        Halloween.four,
        Halloween.four,
      ],
      dark: [
        Halloween.one,
        Halloween.two,
        Halloween.three,
        Halloween.four,
        Halloween.four,
      ],
    }
  }
  return {
    light: [
      Christmas.one,
      Christmas.two,
      Christmas.three,
      Christmas.four,
      Christmas.five,
    ],
    dark: [
      Christmas.one,
      Christmas.two,
      Christmas.three,
      Christmas.four,
      Christmas.five,
    ],
  }
}

export const getAppBarColorLambda = (theme?: AppTheme) => {
  if (!theme || theme === AppTheme.Basic) return undefined // use the default color

  // by default halloween as only two options for now:
  if (theme === AppTheme.Halloween) return Halloween.four
  return Christmas.five
}

export const getButtonColorLambda = (
  theme?: AppTheme,
  disabled?: boolean,
): SxProps<Theme> | undefined => {
  if (!theme || theme === AppTheme.Basic) return undefined

  // by default halloween as only two options for now:
  if (theme === AppTheme.Halloween) {
    if (disabled) {
      return {
        color: Halloween.one, // it will be the font color
        borderColor: Halloween.one, // it will be the border color
        backgroundColor: Halloween.five,
      }
    }
    return {
      color: disabled ? Halloween.three : Halloween.five,
      borderColor: disabled ? Halloween.one : Halloween.five,
      backgroundColor: disabled ? undefined : Halloween.two,
    }
  }

  if (theme === AppTheme.Christmas) {
    if (disabled) {
      return {
        color: Christmas.one, // it will be the font color
        borderColor: Christmas.one, // it will be the border color
        backgroundColor: Christmas.five,
      }
    }
    return {
      color: disabled ? Christmas.three : Christmas.one,
      borderColor: disabled ? Christmas.one : Christmas.one,
      backgroundColor: disabled ? undefined : Christmas.five,
    }
  }
}

/**
 * Color for the done button
 */
export const getDoneColorLambda = (theme?: AppTheme): string => {
  switch (theme) {
    case AppTheme.Halloween:
      return Halloween.five
    case AppTheme.Christmas:
      return Christmas.five
    default:
      return `green`
  }
}
