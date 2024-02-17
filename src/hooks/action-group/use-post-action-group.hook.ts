import {
  PostActionGroupDTO,
  postActionGroupApi,
} from '@/api/action-groups/post-action-group.api'
import { useRecoilCallback } from 'recoil'
import { useRituals } from '../ritual/use-rituals.hook'

export const usePostActionGroup = () => {
  const getRituals = useRituals()

  const onGetActionGroupById = useRecoilCallback(
    () => async (dto: PostActionGroupDTO) => {
      try {
        await postActionGroupApi(dto)
        await getRituals() // update with new rituals
      } catch {}
    },
    [getRituals],
  )
  return onGetActionGroupById
}
