import { FC, useCallback } from 'react'
import { Stack, Typography } from '@mui/material'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useActionGroupById } from '@/hooks/action-group/use-action-group-by-id.hook'
import { useRecoilValue } from 'recoil'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import ActivityCalendarById from '../molecule_activity_calendar/index.by-id'

interface Props {
  id: string
}
const ActivityCalendarFrame: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const onGetActionGroupById = useActionGroupById(id)

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroupById()])
  }, [onGetActionGroupById])

  return (
    <Stack width="100%" alignItems="center">
      <Stack>
        {/* Header */}
        <Stack alignItems="center" direction={`row`} spacing={0.5} m={2}>
          <Typography
            variant="h6"
            fontStyle={`italic`}
            fontFamily={`Cormorant Garamond`}
          >
            {actionGroup
              ? `Your consistency for "${actionGroup.props.name}" this year`
              : `Unknown Consistency`}
          </Typography>
          <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
        </Stack>
        {/* Body */}
        <ActivityCalendarById id={id} />
        {/* Dialog */}
      </Stack>
    </Stack>
  )
}

export default ActivityCalendarFrame
