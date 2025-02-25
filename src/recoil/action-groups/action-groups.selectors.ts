import { selector, selectorFamily } from 'recoil'
import { Rkp, Rks } from '../index.keys'
import { actionGroupFamily, actionGroupIdsState } from './action-groups.state'
import { ActionGroupFixedId } from '@/constants/action-group.constant'

/** Private Recoil Key */
enum Prk {
  ActionGroupAchievedPercentSelector = `actionGroupAchievedPercentSelector`,
  IsActionGroupPunchableSelector = `isActionGroupPunchableSelector`,
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
      if (!actionGroup) return 0 // this means it is not yet ready

      totalCounts++
      if (actionGroup.isTodayHandled) achievedCount++
    }

    if (totalCounts === 0) return 0
    return Math.floor((achievedCount / totalCounts) * 100)
  },
})

/**
 * isActionGroupPunchableSelector defines if the action group is punchable (the green button with "DONE!" text)
 */
export const isActionGroupPunchableSelector = selectorFamily<boolean, string>({
  key: Rkp.ActionGroups + Prk.IsActionGroupPunchableSelector + Rks.Selector,
  get:
    (id: string) =>
    ({ get }) => {
      const actionGroup = get(actionGroupFamily(id))
      if (!actionGroup) return false // not punchable
      if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
        return false // not punchable
      return actionGroup.derivedState.isOnTimeCommittable
    },
})
