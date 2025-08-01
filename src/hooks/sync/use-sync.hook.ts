import { useEffect } from 'react'
import { usePreference } from '../preference/use-preference.hook'

// Do NOT use useSync more than once in the same page.
// Using useSync multiple times can lead to redundant or conflicting state updates,
// performance degradation, and unexpected behavior due to multiple useEffect calls.
// Note: The enforcement mechanism to prevent multiple useSync calls has been removed,
// so it is the developer's responsibility to ensure it is used only once per page.
export const useSync = (): void => {
  const onGetPreference = usePreference()

  useEffect(() => {
    // update preference state by default:
    onGetPreference()
  }, [onGetPreference])
}
