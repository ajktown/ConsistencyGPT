import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'

interface GetActionGroupIds {
  actionGroupIds: string[]
}

/**
 * The ritual group is not yet developed; cannot be modified yet
 */
export const getActionGroupIds = async (): Promise<
  CustomizedAxiosResponse<GetActionGroupIds>
> => {
  const url = `/v1/action-group-ids`
  const res = await axios.get(url)
  return [res.data, res]
}
