import { selector } from 'recoil'
import { Rkp, Rks } from '../index.keys'
import { actionGroupFamily, actionGroupIdsState } from './action-groups.state'

/** Private Recoil Key */
enum Prk {
  ActionGroupAchievedPercentSelector = `actionGroupAchievedPercentSelector`,
}

/**
 * actionGroupAchievedPercent contains 0~100 data to show
 * how much user has achieved today
 */
export const actionGroupAchievedPercentSelector = selector<number>({
  key: Rkp.ActionGroups + Prk.ActionGroupAchievedPercentSelector + Rks.Selector,
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

    if (totalCounts === 0) return 0
    return Math.floor((achievedCount / totalCounts) * 100)
  },
})
