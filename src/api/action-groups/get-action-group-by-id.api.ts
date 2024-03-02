import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetActionGroupRes } from './index.interface'

interface ReqDTO {
  id: string
}
export const getActionGroupByIdApi = async (
  reqDto: ReqDTO,
): Promise<CustomizedAxiosResponse<GetActionGroupRes>> => {
  const url = `/v1/action-groups/${reqDto.id}`
  const res = await axios.get(url)
  return [res.data, res]
}
