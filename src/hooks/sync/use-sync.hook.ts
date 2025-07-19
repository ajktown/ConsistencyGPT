import { useEffect } from 'react'
import { usePreference } from '../preference/use-preference.hook'

// useSync runs only once
// This may not exist in multiple places
export const useSync = (): void => {
  const onGetPreference = usePreference()

  useEffect(() => {
    // update preference state by default:
    onGetPreference()
  }, [onGetPreference])
}
