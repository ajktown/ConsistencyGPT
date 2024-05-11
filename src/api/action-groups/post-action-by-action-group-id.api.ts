import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetActionGroupRes } from './index.interface'

export interface PostActionBodyDTO {
  isDummy: boolean
}

export const postActionByActionGroupIdApi = async (
  actionGroupId: string,
  dto: undefined | PostActionBodyDTO,
): Promise<CustomizedAxiosResponse<GetActionGroupRes>> => {
  const url = `/v1/action-groups/${actionGroupId}/actions`
  const res = await axios.post(url, dto)
  return [res.data, res]
}
