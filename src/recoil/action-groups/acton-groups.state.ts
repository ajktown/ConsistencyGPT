import { atom } from 'recoil'
import { Rkp } from '../index.keys'
import { ActionGroupProps } from '@/api/action-groups/get-action-groups.api'

/** Private Recoil Key */
enum Prk {
  ActionGroupsState = `ActionGroupState`,
}

type PrivateActionGroupState =
  | [] // AJK Town prefers undefined as loading state, but since the depending library does not handle undefined, we use empty array as loading state
  | null
  | ActionGroupProps[]
export const actionGroupsState = atom<PrivateActionGroupState>({
  key: Rkp.App + Prk.ActionGroupsState,
  default: [],
})
