import { act, FC, Fragment, useMemo } from 'react'
import MoreIcon from '@mui/icons-material/MoreVert'
import StyledIconButtonWithMenuAtom from '@/atoms/StyledIconButtonWithMenu'
import {
  actionGroupFamily,
  archivingActionGroupIdState,
} from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import { usePostActionByActionGroupId } from '@/hooks/action-group/use-post-action-by-action-group-id.hook'
import { usePostDummyActionByActionGroupId } from '@/hooks/action-group/use-post-dummy-action-by-action-group-id.hook'
import { useDeleteActionsByActionGroupId } from '@/hooks/action-group/use-delete-actions-by-action-group-id.hook'

interface Props {
  id: string // action group id
  nickname?: string
}
const ActionGroupCardMoreOptions: FC<Props> = ({ id, nickname }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))
  const [loadingLatePost, onPostActionByActionGroupId] =
    usePostActionByActionGroupId(id)
  const [loadingDelete, onDeleteTodayActionsByActionGroupId] =
    useDeleteActionsByActionGroupId(id, `today`)
  const [loadingDeleteYesterday, onDeleteYesterdayActionsByActionGroupId] =
    useDeleteActionsByActionGroupId(id, `yesterday`)
  const [loadingDummyPost, onPostDummyActionByActionGroupId] =
    usePostDummyActionByActionGroupId(id)

  const isOnClickCommitLateDisabled: boolean = useMemo(() => {
    if (!actionGroup) return true // disabled
    if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
      return true // disabled

    // if already handled:
    return !actionGroup.derivedState.isLateCommittable
  }, [actionGroup])

  const isDummyCommittableDisabled: boolean = useMemo(() => {
    if (!actionGroup) return true // disabled
    if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
      return true // disabled

    // if already handled:
    return !actionGroup.derivedState.isDummyCommittable
  }, [actionGroup])

  const isDeleteTodayActionsDisabled: boolean = useMemo(() => {
    if (!actionGroup) return true // disabled
    if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
      return true // disabled

    return !actionGroup.derivedState.isDeletable
  }, [actionGroup])

  const isDeleteYesterdayActionsDisabled: boolean = useMemo(() => {
    if (!actionGroup) return true // disabled
    if (actionGroup.props.id === ActionGroupFixedId.DailyPostWordChallenge)
      return true // disabled

    return !actionGroup.derivedState.isYesterdayDeletable
  }, [actionGroup])

  const setArchivingActionGroupId = useSetRecoilState(
    archivingActionGroupIdState,
  )

  // contains every loading state of a function:
  const everyLoading =
    loadingLatePost ||
    loadingDelete ||
    loadingDeleteYesterday ||
    loadingDummyPost

  if (nickname) return null // if it is shared mode (or has nickname), do not show the button

  return (
    <StyledIconButtonWithMenuAtom
      menus={[
        {
          id: `today_not_committable`,
          title: `Today Not Committable`,
          isDisabled: isDummyCommittableDisabled || everyLoading,
          onClick: onPostDummyActionByActionGroupId,
        },
        {
          id: `commit_late`,
          title: `Commit Late`,
          isDisabled: isOnClickCommitLateDisabled || everyLoading,
          onClick: onPostActionByActionGroupId,
        },
        {
          id: `delete_today_actions`,
          title: `Delete Today's Action`, // not actions (has "s") because API only allows one action per day atm in Mar 2024
          isDisabled: isDeleteTodayActionsDisabled || everyLoading,
          onClick: onDeleteTodayActionsByActionGroupId,
        },
        {
          id: `delete yesterday action`,
          title: `Delete Yesterday's Action`, // not actions (has "s") because API only allows one action per day atm in Mar 2024
          isDisabled: isDeleteYesterdayActionsDisabled || everyLoading,
          onClick: onDeleteYesterdayActionsByActionGroupId,
        },
        {
          id: `archive_action_group`,
          title: `Archive This Action Group`,
          isDisabled:
            everyLoading || id === ActionGroupFixedId.DailyPostWordChallenge,
          onClick: () => setArchivingActionGroupId(id),
        },
      ]}
      jsxElementButton={<MoreIcon />}
    />
  )
}

export default ActionGroupCardMoreOptions
