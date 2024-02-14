import { FC, useCallback } from 'react'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useActionGroups } from '@/hooks/action-group/use-action-groups.hook'

const RefreshButton: FC = () => {
  const onGetActionGroups = useActionGroups()

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroups()])
  }, [onGetActionGroups])

  return <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
}

export default RefreshButton
