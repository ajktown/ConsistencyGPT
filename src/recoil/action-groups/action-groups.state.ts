import { atom } from 'recoil'
import { Rkp } from '../index.keys'
import { GetActionGroupRes } from '@/api/action-groups/get-action-groups.api'

/** Private Recoil Key */
enum Prk {
  ActionGroupsState = `ActionGroupState`,
}

type PrivateGetActionGroupsState = undefined | null | GetActionGroupRes
export const getActionGroupsState = atom<PrivateGetActionGroupsState>({
  key: Rkp.App + Prk.ActionGroupsState,
  default: undefined,
})
