import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'
import { ISharedResource } from './index.interface'
import { ISharedWord } from '../words/interfaces'

/**
 * One of them should be defined otherwise
 * the API will return 400.
 */
interface GetSharedResourcesQueryDTO {
  id: undefined | string
  wordId: undefined | string
}

export interface GetSharedResourceRes {
  sharedResource: ISharedResource
  word: null | ISharedWord
}

export const getSharedResourceApi = async (
  params: GetSharedResourcesQueryDTO,
): Promise<CustomizedAxiosResponse<GetSharedResourceRes>> => {
  const url = `/v1/shared-resource`
  const res = await axios.get(url, { params })
  return [res.data, res]
}
