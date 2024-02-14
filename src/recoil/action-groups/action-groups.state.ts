import { atom } from 'recoil'
import { Rkp } from '../index.keys'
import { GetActionGroupRes } from '@/api/action-groups/index.interface'

/** Private Recoil Key */
enum Prk {
  ActionGroupsState = `ActionGroupState`,
}

type ActionGroupDailyPostWordChallengeState =
  | undefined
  | null
  | GetActionGroupRes
export const actionGroupDailyPostWordChallengeState =
  atom<ActionGroupDailyPostWordChallengeState>({
    key: Rkp.App + Prk.ActionGroupsState,
    default: undefined,
  })
