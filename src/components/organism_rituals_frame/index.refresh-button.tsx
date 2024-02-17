import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useRituals } from '@/hooks/ritual/use-rituals.hook'
import { FC, useCallback } from 'react'

const RitualsFrameRefreshButton: FC = () => {
  const onGetRitual = useRituals()
  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetRitual()])
  }, [onGetRitual])

  return <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
}

export default RitualsFrameRefreshButton
