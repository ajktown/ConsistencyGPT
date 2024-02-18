import {
  PostActionGroupDTO,
  postActionGroupApi,
} from '@/api/action-groups/post-action-group.api'
import { useRecoilCallback } from 'recoil'
import { useRituals } from '../ritual/use-rituals.hook'
import { useState } from 'react'

type usePostActionGroup = [boolean, (dto: PostActionGroupDTO) => Promise<void>]
export const usePostActionGroup = (): usePostActionGroup => {
  const [loading, setLoading] = useState(false)
  const getRituals = useRituals()

  const onGetActionGroupById = useRecoilCallback(
    () => async (dto: PostActionGroupDTO) => {
      try {
        setLoading(true)
        await postActionGroupApi(dto)
        await getRituals() // update with new rituals
      } finally {
        setLoading(false)
      }
    },
    [getRituals],
  )
  return [loading, onGetActionGroupById]
}
