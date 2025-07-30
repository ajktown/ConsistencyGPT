import { useEffect } from 'react'
import { usePreference } from '../preference/use-preference.hook'

// Do NOT use useSync more than once in the same page
export const useSync = (): void => {
  const onGetPreference = usePreference()

  useEffect(() => {
    // update preference state by default:
    onGetPreference()
  }, [onGetPreference])
}
