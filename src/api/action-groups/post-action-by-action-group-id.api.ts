import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetActionGroupRes } from './index.interface'

export const postActionByActionGroupIdApi = async (
  actionGroupId: string,
): Promise<CustomizedAxiosResponse<GetActionGroupRes>> => {
  const url = `/v1/action-groups/${actionGroupId}/actions`
  const res = await axios.post(url)
  return [res.data, res]
}
