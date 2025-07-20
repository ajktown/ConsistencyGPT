import { useEffect } from 'react'
import { usePreference } from '../preference/use-preference.hook'

// Initializes preference state on component mount
// This hook should not be used in multiple places simultaneously because it relies on shared state.
// Using it in multiple places could lead to race conditions or inconsistent state updates.
// And therefore it is designed to be used in a single component or context where preference state is managed.
let isSyncInUse = false // Tracks whether the hook is already in use

export const useSync = (): void => {
  if (isSyncInUse)
    throw new Error(
      `useSync hook is already in use. Avoid using it in multiple components simultaneously.`,
    )
  isSyncInUse = true

  const onGetPreference = usePreference()

  useEffect(() => {
    // update preference state by default:
    onGetPreference()

    // Cleanup:
    return () => {
      isSyncInUse = false // Reset the flag when the component unmounts
    }
  }, [onGetPreference])
}
