import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetRitualsRes } from '../rituals/get-rituals.api'

interface Query {
  nickname: string
}
export const getUserRitualsApi = async (
  q: Query,
): Promise<CustomizedAxiosResponse<GetRitualsRes>> => {
  const url = `/v1/users/${q.nickname}/rituals`
  const res = await axios.get(url)
  return [res.data, res]
}
