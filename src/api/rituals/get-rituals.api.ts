import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'

export interface IRitual {
  id: string
  ownerId: string
  name: string
  orderedActionGroupIds: string[]
}

export interface GetRitualsRes {
  rituals: IRitual[]
}

/**
 * The ritual group is not yet developed; cannot be modified yet
 */
export const getRitualsApi = async (): Promise<
  CustomizedAxiosResponse<GetRitualsRes>
> => {
  const url = `/v1/rituals`
  const res = await axios.get(url)
  return [res.data, res]
}
