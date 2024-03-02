import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useRituals } from '@/hooks/ritual/use-rituals.hook'
import { FC, useCallback } from 'react'

interface Props {
  nickname?: string
}
const RitualsFrameRefreshButton: FC<Props> = ({ nickname }) => {
  const onGetRitual = useRituals()
  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetRitual(nickname)])
  }, [nickname, onGetRitual])

  return <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
}

export default RitualsFrameRefreshButton
