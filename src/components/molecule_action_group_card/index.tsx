import { FC, useCallback } from 'react'
import { Card, Stack, Typography } from '@mui/material'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useActionGroupById } from '@/hooks/action-group/use-action-group-by-id.hook'
import { useRecoilCallback, useRecoilValue } from 'recoil'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import ActivityCalendarById from '../molecule_activity_calendar/index.by-id'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { postActionByActionGroupId } from '@/api/action-groups/post-action-by-action-group-id.api'

interface Props {
  id: string
}
const ActionGroupCard: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const onGetActionGroupById = useActionGroupById(id)

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroupById()])
  }, [onGetActionGroupById])

  const onPost = useRecoilCallback(
    // TODO: Write a hook with loading state
    ({ set }) =>
      async () => {
        try {
          const [data] = await postActionByActionGroupId(id)
          set(actionGroupFamily(data.props.id), data)
        } catch {}
      },
    [id],
  )

  return (
    <Card>
      <Stack m={3}>
        {/* Header */}
        <Stack alignItems="center" direction={`row`} spacing={0.5} m={2}>
          <Typography
            variant="h6"
            fontStyle={`italic`}
            fontFamily={`Cormorant Garamond`}
          >
            {actionGroup
              ? `"${actionGroup.props.task}" before ${new Date(actionGroup.props.closeAt).toLocaleTimeString(`Seoul`)}`
              : `Unknown Consistency`}
          </Typography>
          <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
        </Stack>
        {/* Body */}
        {!actionGroup?.isOpened && <ActivityCalendarById id={id} />}
        {actionGroup?.isOpened && (
          <Stack alignItems={`center`} direction={`row`}>
            <StyledTextButtonAtom title="Post Action" onClick={onPost} />
            <StyledTextButtonAtom title="Cannot commit today" />
          </Stack>
        )}
        {/* Dialog */}
      </Stack>
    </Card>
  )
}

export default ActionGroupCard
