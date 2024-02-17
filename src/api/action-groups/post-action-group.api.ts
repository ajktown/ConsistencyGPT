import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetActionGroupRes } from './index.interface'

export interface PostActionGroupDTO {
  task: string
  timezone: string
  openMinsAfter: number
  closeMinsAfter: number
}
export const postActionGroupApi = async (
  dto: PostActionGroupDTO,
): Promise<CustomizedAxiosResponse<GetActionGroupRes>> => {
  const url = `/v1/action-groups`
  const res = await axios.post(url, dto)
  return [res.data, res]
}
