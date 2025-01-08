import { FC } from 'react'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import ActionGroupCard from '@/components/molecule_action_group_card'
import { Stack } from '@mui/material'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import ArchiveActionGroupDialog from '../dialog_archive_action_group'
import YesterdayActionDeletingWarningDialog from '../organism_appbar/index.main-warning-dialog'
interface Props {
  nickname?: string
}
const FRAME_MAX_WIDTH = 980
const RitualsFrame: FC<Props> = ({ nickname }) => {
  const actionGroupIds = useRecoilValue(actionGroupIdsState)

  return (
    <Stack alignItems={`center`}>
      <Stack maxWidth={FRAME_MAX_WIDTH} spacing={2} p={2}>
        {!nickname && (
          <ActionGroupCard id={ActionGroupFixedId.DailyPostWordChallenge} />
        )}
        {actionGroupIds.map((id) => (
          <ActionGroupCard key={id} id={id} nickname={nickname} />
        ))}
      </Stack>
      <ArchiveActionGroupDialog />
      <YesterdayActionDeletingWarningDialog />
    </Stack>
  )
}

export default RitualsFrame
