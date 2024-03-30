import { FC, useMemo } from 'react'
import MoreIcon from '@mui/icons-material/MoreVert'
import StyledIconButtonWithMenuAtom from '@/atoms/StyledIconButtonWithMenu'
import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { usePostActionByActionGroupId } from '@/hooks/action-group/use-post-action-by-action-group-id.hook'

interface Props {
  id: string // action group id
  nickname?: string
}
const ActionGroupCardMoreOptions: FC<Props> = ({ id, nickname }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const [loading, onPostActionByActionGroupId] =
    usePostActionByActionGroupId(id)

  const isOnClickCommitLateDisabled: boolean = useMemo(() => {
    // TODO: Must use the API given derived state of the action instead (once api does it)
    if (!actionGroup) return true // disabled
    if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
      return true // disabled
    // if already handled:
    if (actionGroup.isTodaySuccessful) return true // disabled
    return !actionGroup.isPassed // disabled if it is not passed
  }, [actionGroup])

  if (nickname) return null // if it is shared mode (or has nickname), do not show the button

  return (
    <StyledIconButtonWithMenuAtom
      menus={[
        {
          id: `commit_late`,
          title: `Commit Late`,
          isDisabled: isOnClickCommitLateDisabled || loading,
          onClick: onPostActionByActionGroupId,
        },
      ]}
      jsxElementButton={<MoreIcon />}
    />
  )
}

export default ActionGroupCardMoreOptions
