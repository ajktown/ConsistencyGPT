import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetActionGroupRes } from './index.interface'

/**
 * Delete Today's actions by action group id
 * this will delete EVERY today's action.
 */
export const deleteTodayActionsByActionGroupId = async (
  actionGroupId: string,
): Promise<CustomizedAxiosResponse<GetActionGroupRes>> => {
  const url = `/v1/action-groups/${actionGroupId}/actions/today`
  const res = await axios.delete(url)
  return [res.data, res]
}
