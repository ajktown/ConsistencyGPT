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

export const getAppThemeColorLambda = (theme?: AppTheme) => {
  if (!theme || theme === AppTheme.Basic)
    return {
      light: [Basic.one, Basic.two, Basic.three, Basic.four, Basic.five],
      dark: [Basic.one, Basic.two, Basic.three, Basic.four, Basic.five],
    }

  // by default halloween as only two options for now:
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

export const getAppBarColorLambda = (theme?: AppTheme) => {
  if (!theme || theme === AppTheme.Basic) return undefined // use the default color

  // by default halloween as only two options for now:
  return Halloween.four
}

export const getButtonColorLambda = (
  theme?: AppTheme,
  disabled?: boolean,
): SxProps<Theme> | undefined => {
  if (!theme || theme === AppTheme.Basic) return undefined

  // by default halloween as only two options for now:
  if (disabled) {
    return {
      color: Halloween.three, // it will be the font color
      borderColor: Halloween.one, // it will be the border color
      backgroundColor: Halloween.one,
    }
  }

  return {
    color: disabled ? Halloween.three : Halloween.five,
    borderColor: disabled ? Halloween.one : Halloween.five,
    backgroundColor: disabled ? undefined : Halloween.two,
  }
}
