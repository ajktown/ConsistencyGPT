import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { IParentRitual } from './get-rituals.api'

export interface PatchRitualGroupBodyDTO {
  actionGroupIds: string[]
  isArchived: boolean
}

export interface GetRitualByIdRes {
  ritual: IParentRitual
}

export const patchRitualApi = async (
  dto: Partial<PatchRitualGroupBodyDTO>,
): Promise<CustomizedAxiosResponse<GetRitualByIdRes>> => {
  const url = `/v1/rituals/default`
  const res = await axios.patch(url, dto)
  return [res.data, res]
}
