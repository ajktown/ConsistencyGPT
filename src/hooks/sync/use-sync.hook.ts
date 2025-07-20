import { useEffect } from 'react'
import { usePreference } from '../preference/use-preference.hook'

// Initializes preference state on component mount
// This hook should not be used in multiple places simultaneously
export const useSync = (): void => {
  const onGetPreference = usePreference()

  useEffect(() => {
    // update preference state by default:
    onGetPreference()
  }, [onGetPreference])
}
