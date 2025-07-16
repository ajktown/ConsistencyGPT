import { GlobalLanguageCode } from '@/global.interface'
import { DataBasics } from '../index.interface'

export interface IPreference extends IPreferenceCGT, DataBasics {
  id: string
  nativeLanguages: GlobalLanguageCode[]
  useProgressDialog: boolean
}

interface IPreferenceCGT {
  // If true, the user will see a progress dialog when the app is loading
  useProgressDialog: boolean
}

export interface PreferenceModifiable {
  nativeLanguages: GlobalLanguageCode[]
  selectedDictIds: string[]
}
