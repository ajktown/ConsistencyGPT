import { atom, atomFamily, selector } from 'recoil'
import { Rkp, Rks } from '../index.keys'
import { GetActionGroupRes } from '@/api/action-groups/index.interface'

/** Private Recoil Key */
enum Prk {
  ActionGroupIdsState = `ActionGroupIdsState`,
  ActionGroupsState = `ActionGroupState`,
  ArchivingActionGroupIdState = `ArchivingActionGroupIdState`,
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

/**
 * actionGroupAchievedPercent contains 0~100 data to show
 * how much user has achieved today
 */
// TODO: move me to the selector
export const actionGroupAchievedPercent = selector<number>({
  key: Rkp.ActionGroups + Prk.ActionGroupIdsState + Rks.Selector,
  get: ({ get }) => {
    let totalCounts = 0
    let achievedCount = 0

    const ids = get(actionGroupIdsState)
    for (const id of ids) {
      const actionGroup = get(actionGroupFamily(id))
      if (!actionGroup) continue // empty action groups are not counted

      totalCounts++
      if (actionGroup.isTodayHandled) achievedCount++
    }

    return Math.floor((achievedCount / totalCounts) * 100)
  },
})

// if empty string, dialog does not show up
// if not empty string, dialog shows up, trying to archive the action group
export const archivingActionGroupIdState = atom<string>({
  key: Rkp.ActionGroups + Prk.ArchivingActionGroupIdState,
  default: ``,
})
