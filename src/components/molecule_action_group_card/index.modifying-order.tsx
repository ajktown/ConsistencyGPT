import { FC, useCallback } from 'react'
import { Card, Stack } from '@mui/material'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useActionGroupById } from '@/hooks/action-group/use-action-group-by-id.hook'
import ActionGroupCardTitle from './index.title'

interface Props {
  id: string
}
const ActionGroupCardModifyingOrder: FC<Props> = ({ id }) => {
  const onGetActionGroupById = useActionGroupById(id)

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroupById()])
  }, [onGetActionGroupById])

  return (
    <Card>
      <Stack m={3}>
        {/* Header */}
        <Stack alignItems="center" direction={`row`} spacing={0.5} m={2}>
          <ActionGroupCardTitle id={id} />
          <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
        </Stack>
      </Stack>
    </Card>
  )
}

export default ActionGroupCardModifyingOrder
