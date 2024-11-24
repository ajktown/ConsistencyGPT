import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { GetRitualsRes } from './get-rituals.api'

export interface PatchRitualGroupBodyDTO {
  actionGroupIds: string[]
  isArchived: boolean
}

type PatchRitualRes = GetRitualsRes

export const patchRitualApi = async (
  dto: Partial<PatchRitualGroupBodyDTO>,
): Promise<CustomizedAxiosResponse<PatchRitualRes>> => {
  const url = `/v1/rituals/default`
  const res = await axios.patch(url, dto)
  return [res.data, res]
}
