import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'

interface IRitual {
  id: string
  ownerId: string
  name: string
  actionGroupIds: string[]
}

interface GetRitualsRes {
  rituals: IRitual[]
}

/**
 * The ritual group is not yet developed; cannot be modified yet
 */
export const getRituals = async (): Promise<
  CustomizedAxiosResponse<GetRitualsRes>
> => {
  const url = `/v1/rituals`
  const res = await axios.get(url)
  return [res.data, res]
}
