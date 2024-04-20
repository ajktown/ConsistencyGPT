import { FC, useCallback } from 'react'
import { useActionGroupById } from '@/hooks/action-group/use-action-group-by-id.hook'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'

interface Props {
  groupId: string
}
const SettingFrameRefresher: FC<Props> = ({ groupId }) => {
  const onGetActionGroupById = useActionGroupById(groupId)

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroupById()])
  }, [onGetActionGroupById])

  return <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
}

export default SettingFrameRefresher
