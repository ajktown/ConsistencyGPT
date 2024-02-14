import axios from 'axios'
import { CustomizedAxiosResponse, DataBasics } from '../index.interface'

type IActionLevel = 0 | 1 | 2 | 3 | 4

interface IAction extends DataBasics {
  id: string
  ownerID: string
  groupId: string
  message: string
}

export interface IActionDerived extends IAction {
  level: IActionLevel // level is 100% decided by the ActionGroup
}

export interface IActionGroup extends DataBasics {
  name: string
}

export interface GetActionGroupRes {
  props: IActionGroup
  actions: IActionDerived[]
  isTodayHandled: boolean
  totalCount: number
}

export const getActionGroupsApi = async (): Promise<
  CustomizedAxiosResponse<GetActionGroupRes>
> => {
  const url = `/v1/action-groups`
  const res = await axios.get(url)
  return [res.data, res]
}
