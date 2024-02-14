import { atom, atomFamily } from 'recoil'
import { Rkp, Rks } from '../index.keys'
import { GetActionGroupRes } from '@/api/action-groups/index.interface'

/** Private Recoil Key */
enum Prk {
  ActionGroupIdsState = `ActionGroupIdsState`,
  ActionGroupDailyPostWordChallengeState = `ActionGroupDailyPostWordChallengeState`,
  ActionGroupsState = `ActionGroupState`,
}

type ActionGroupState = undefined | null | GetActionGroupRes
export const actionGroupDailyPostWordChallengeState = atom<ActionGroupState>({
  key: Rkp.ActionGroups + Prk.ActionGroupDailyPostWordChallengeState,
  default: undefined,
})

export const actionGroupFamily = atomFamily<ActionGroupState, string>({
  key: Rkp.ActionGroups + Prk.ActionGroupsState + Rks.Family,
  default: null,
})

export const actionGroupIdsState = atom<string[]>({
  key: Rkp.ActionGroups + Prk.ActionGroupIdsState,
  default: [],
})
