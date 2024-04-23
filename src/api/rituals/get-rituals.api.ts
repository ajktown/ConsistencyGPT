import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'

interface IRitual {
  id: string
  ownerId: string
  name: string
  // orderedActionGroupIds: string[] // don't need it so its commented out
}

export interface IParentRitual extends IRitual {
  actionGroupIds: string[]
}

export interface GetRitualsRes {
  rituals: IParentRitual[]
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
