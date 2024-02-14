import { atom } from 'recoil'
import { Rkp } from '../index.keys'
import { GetActionGroupsResDTO } from '@/api/action-groups/get-action-groups.api'

/** Private Recoil Key */
enum Prk {
  ActionGroupsState = `ActionGroupState`,
}

type PrivateActionGroupState = undefined | null | GetActionGroupsResDTO
export const actionGroupsState = atom<PrivateActionGroupState>({
  key: Rkp.App + Prk.ActionGroupsState,
  default: undefined,
})
