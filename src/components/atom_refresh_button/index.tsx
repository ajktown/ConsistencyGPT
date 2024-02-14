import { FC, useCallback } from 'react'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useActionGroupDailyPostWordWordChallenge } from '@/hooks/action-group/use-daily-post-word-challenge.hook'

const RefreshButton: FC = () => {
  const onGetActionGroups = useActionGroupDailyPostWordWordChallenge()

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroups()])
  }, [onGetActionGroups])

  return <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
}

export default RefreshButton
