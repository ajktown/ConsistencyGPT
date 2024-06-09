import axios from 'axios'

interface PostArchiveActionGroupBodyDTO {
  message: string
}
export const postArchiveActionGroupApi = async (
  actionGroupId: string,
  body: PostArchiveActionGroupBodyDTO,
): Promise<void> => {
  const url = `/v1/action-groups/${actionGroupId}/archive`
  return axios.post(url, body)
}
