import { atom, atomFamily } from 'recoil'
import { Rkp, Rks } from '@/recoil/index.keys'
import { GetSharedResourceRes } from '@/api/shared-resources/get-shared-resource.api'

/** Private Recoil Key */
enum Prk {
  SharedWordId = `SharedWordId`,
  SharedWord = `SharedWord`,
}

/**
 * The modal will appear if it is set non empty
 */
export const sharedWordIdState = atom<string>({
  key: Rkp.SharedResource + Prk.SharedWordId,
  default: ``,
})

type SharedWordFamily =
  | undefined // not requested (loading)
  | null // loaded, but not exist
  | GetSharedResourceRes

export const sharedWordFamily = atomFamily<SharedWordFamily, string>({
  key: Rkp.SharedResource + Prk.SharedWord + Rks.Family,
  default: undefined,
})
