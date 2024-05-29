import { useRecoilCallback } from 'recoil'
import { preferenceState } from '@/recoil/preferences/preference.state'
import { GlobalLanguageCode } from '@/global.interface'
import { usePatchPreference } from './use-patch-preference.hook'

export const usePatchPreferenceNativeLanguage = (
  languageCode: GlobalLanguageCode,
) => {
  const onPatchPreference = usePatchPreference()
  const onPatchPreferenceNativeLanguage = useRecoilCallback(
    ({ snapshot }) =>
      async (_, checked: boolean) => {
        try {
          const preference = await snapshot.getPromise(preferenceState)
          if (!preference) return

          const nativeLanguagesSet = new Set([
            ...preference.nativeLanguages,
            languageCode,
          ])

          if (!checked) nativeLanguagesSet.delete(languageCode)
          const nativeLanguages: GlobalLanguageCode[] =
            Array.from(nativeLanguagesSet)

          await onPatchPreference({ nativeLanguages })
        } catch {}
      },
    [onPatchPreference, languageCode],
  )

  return onPatchPreferenceNativeLanguage
}
