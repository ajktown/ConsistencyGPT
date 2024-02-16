import { Level } from 'react-activity-calendar'
import { DataBasics } from '../index.interface'

export type IActionLevel = Level

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

export interface GetActionGroupRes {
  props: IActionGroup
  actions: IActionDerived[]
  actionsLength: number
  isTodayHandled: boolean
  totalCount: number
}
