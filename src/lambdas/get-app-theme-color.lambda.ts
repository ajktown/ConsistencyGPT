import { AppTheme } from '@/recoil/app-theme/app-theme.state'
import { SxProps, Theme } from '@mui/material'

enum Basic {
  'one' = `#d4e6cf`,
  'two' = `#a7d4bf`,
  'three' = `#80d1ab`,
  'four' = `#56d197`,
  'five' = `#29cc7f`,
}

// enum Halloween {
//   'one' = `#ebedf0`,
//   'two' = `#ffee4a`,
//   'three' = `#ffc500`,
//   'four' = `#fe9601`,
//   'five' = `#d47901`,
// }

enum Christmas {
  'one' = `#edf8e9`,
  'two' = `#c7e9c0`,
  'three' = `#74c476`,
  'four' = `#238b45`,
  'five' = `#005a32`,
  'six' = `#b01b2e`,
  'seven' = `#ffffff`,
}

export const getAppThemeColorLambda = (theme?: AppTheme) => {
  if (!theme || theme === AppTheme.Basic)
    return {
      light: [Basic.one, Basic.two, Basic.three, Basic.four, Basic.five],
      dark: [Basic.one, Basic.two, Basic.three, Basic.four, Basic.five],
    }

  // by default halloween as only two options for now:
  // return {
  //   light: [
  //     Halloween.one,
  //     Halloween.two,
  //     Halloween.three,
  //     Halloween.four,
  //     Halloween.four,
  //   ],
  //   dark: [
  //     Halloween.one,
  //     Halloween.two,
  //     Halloween.three,
  //     Halloween.four,
  //     Halloween.four,
  //   ],
  // }

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
  //return Halloween.four
  return Christmas.six
}

export const getButtonColorLambda = (
  theme?: AppTheme,
  disabled?: boolean,
): SxProps<Theme> | undefined => {
  if (!theme || theme === AppTheme.Basic) return undefined

  // by default halloween as only two options for now:
  // if (disabled) {
  //   return {
  //     color: Halloween.three, // it will be the font color
  //     borderColor: Halloween.one, // it will be the border color
  //     backgroundColor: Halloween.one,
  //   }
  // }

  if (disabled) {
    return {
      color: Christmas.five, // it will be the font color
      borderColor: Christmas.five, // it will be the border color
      backgroundColor: Christmas.seven,
    }
  }

  // return {
  //   color: disabled ? Halloween.three : Halloween.five,
  //   borderColor: disabled ? Halloween.one : Halloween.five,
  //   backgroundColor: disabled ? undefined : Halloween.two,
  // }

  return {
    color: disabled ? Christmas.three : Christmas.seven,
    borderColor: disabled ? Christmas.one : Christmas.seven,
    backgroundColor: disabled ? undefined : Christmas.six,
  }
}
