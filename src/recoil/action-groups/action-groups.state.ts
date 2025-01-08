import { atom, atomFamily } from 'recoil'
import { Rkp, Rks } from '../index.keys'
import { GetActionGroupRes } from '@/api/action-groups/index.interface'

/** Private Recoil Key */
enum Prk {
  ActionGroupIdsState = `ActionGroupIdsState`,
  ActionGroupsState = `ActionGroupState`,
  ArchivingActionGroupIdState = `ArchivingActionGroupIdState`,
  YesterdayActionDeletingActionGroupId = `yesterdayActionDeletingActionGroupIdState`,
}

type ActionGroupState = undefined | null | GetActionGroupRes
export const actionGroupFamily = atomFamily<ActionGroupState, string>({
  key: Rkp.ActionGroups + Prk.ActionGroupsState + Rks.Family,
  default: null,
})

export const actionGroupIdsState = atom<string[]>({
  key: Rkp.ActionGroups + Prk.ActionGroupIdsState,
  default: [],
})

// if empty string, dialog does not show up
// if not empty string, dialog shows up, trying to archive the action group
export const archivingActionGroupIdState = atom<string>({
  key: Rkp.ActionGroups + Prk.ArchivingActionGroupIdState,
  default: ``,
})

export const yesterdayActionDeletingACtionGroupIdState = atom<string>({
  key: Rkp.ActionGroups + Prk.YesterdayActionDeletingActionGroupId,
  default: ``, // empty string is considered not-opened
})
