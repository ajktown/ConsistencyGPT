import { DataBasics } from '../index.interface'

export type IActionLevel = 0 | 1 | 2 | 3 | 4

export interface IActionInput extends DataBasics {
  id: string
  ownerId: string
  groupId: string
}

export interface IAction extends IActionInput {
  yyyymmdd: string // the date in YYYY-MM-DD format
}

export interface IActionDerived extends IAction {
  level: IActionLevel // level is 100% decided by the ActionGroup
}

export interface IActionGroupInput extends DataBasics {
  id: string
  ownerId: string
  task: string
  timezone: string
  openMinsAfter: number
  closeMinsBefore: number
}

export interface IActionGroup extends IActionGroupInput {
  openAt: Date
  closeAt: Date
  utc: string // i.e) +9:00 (timezone is private to shared data)
}

type IsTodaySuccessful =
  | true // isTodayHandled
  | false // isPassed && !isTodayHandled
  | null // isPassed

type ActionGroupStateTime = `Early` | `OnTime` | `Late`
type ActionGroupStateCommitment =
  | `Committed`
  | `DummyCommitted`
  | `NotCommitted`
type ActionGroupState = `${ActionGroupStateTime}${ActionGroupStateCommitment}`

interface ActionGroupDerivedState {
  isOnTimeCommittable: boolean
  isDummyCommittable: boolean
  isLateCommittable: boolean
  isDeletable: boolean
}

export interface GetActionGroupRes {
  props: IActionGroup
  actionsLength: number
  isTodayHandled: boolean
  totalCount: number
  isOpened: boolean // check if current time is opened to post action
  isTodaySuccessful: IsTodaySuccessful
  actions: IActionDerived[]
  state: ActionGroupState
  derivedState: ActionGroupDerivedState
}
