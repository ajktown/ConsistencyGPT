import axios from 'axios'
import { CustomizedAxiosResponse } from '../index.interface'

export interface GetSharedUserRes {
  imageUrl: null | string // null if user has no image or user does not want to show the image
  displayingName: null | string
  firstName: null | string
  middleName: null | string
  lastName: null | string
  nickname: null | string
  bio: null | string
}

interface Query {
  nickname: string
}
export const getUserByNickname = async (
  q: Query,
): Promise<CustomizedAxiosResponse<GetSharedUserRes>> => {
  const url = `/v1/users/${q.nickname}`
  const res = await axios.get(url)
  return [res.data, res]
}
