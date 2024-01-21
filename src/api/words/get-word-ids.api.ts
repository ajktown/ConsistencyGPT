import axios from 'axios'
import { CustomizedAxiosResponse, PaginationRoot } from '../index.interface'
import { GetWordParams } from './interfaces/index.search-params'
import { ISemester } from '../semesters/index.interface'

export interface GetWordIdsApi extends PaginationRoot {
  wordIds: string[]
  semester: undefined | ISemester
}
export const getWordIdsApi = async (
  params?: Partial<GetWordParams>,
): Promise<CustomizedAxiosResponse<GetWordIdsApi>> => {
  const url = `/v1/word-ids`
  const res = await axios.get(url, { params })

  return [res.data, res]
}
