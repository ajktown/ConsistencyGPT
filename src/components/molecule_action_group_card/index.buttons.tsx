import { postActionByActionGroupId } from '@/api/action-groups/post-action-by-action-group-id.api'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { Stack } from '@mui/material'
import { FC } from 'react'
import { useRecoilCallback, useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardButton: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))

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

  if (!actionGroup?.isOpened || actionGroup.isTodayHandled) return null
  if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
    return null

  return (
    <Stack alignItems={`center`} direction={`row`}>
      <StyledTextButtonAtom title="Post Action" onClick={onPost} />
      <StyledTextButtonAtom title="Cannot commit today" />
    </Stack>
  )
}

export default ActionGroupCardButton
