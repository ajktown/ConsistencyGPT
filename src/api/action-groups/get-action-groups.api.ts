import axios from 'axios'
import { CustomizedAxiosResponse, DataBasics } from '../index.interface'

type IActionLevel = 0 | 1 | 2 | 3 | 4

interface IAction extends DataBasics {
  ownerID: string
  groupId: string
  level: IActionLevel
  message: string
}
export interface ActionGroupProps {
  props: IAction
}
export interface GetActionGroupsResDTO {
  domains: ActionGroupProps[]
}

export const getActionGroupsApi = async (): Promise<
  CustomizedAxiosResponse<GetActionGroupsResDTO>
> => {
  const url = `/v1/action-groups`
  const res = await axios.get(url)
  return [res.data, res]
}
