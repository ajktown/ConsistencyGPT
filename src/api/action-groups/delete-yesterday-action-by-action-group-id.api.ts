import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetActionGroupRes } from './index.interface'

/**
 * Delete Yesterday's actions by action group id
 * this will delete EVERY yesterday's action.
 */
export const deleteYesterdayActionsByActionGroupId = async (
  actionGroupId: string,
): Promise<CustomizedAxiosResponse<GetActionGroupRes>> => {
  const url = `/v1/action-groups/${actionGroupId}/actions/yesterday`
  const res = await axios.delete(url)
  return [res.data, res]
}
