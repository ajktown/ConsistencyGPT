import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetActionGroupRes } from '../action-groups/index.interface'

interface Query {
  groupId: string
  nickname: string
}
export const getUserActionGroupApi = async (
  q: Query,
): Promise<CustomizedAxiosResponse<GetActionGroupRes>> => {
  const url = `/v1/users/${q.nickname}/action-groups/${q.groupId}`
  const res = await axios.get(url)
  return [res.data, res]
}
