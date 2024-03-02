import { FC } from 'react'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import ActionGroupCard from '@/components/molecule_action_group_card'
import { Stack } from '@mui/material'
import { ActionGroupFixedId } from '@/constants/action-group.constant'

interface Props {
  nickname?: string
}
const RitualsFrame: FC<Props> = ({ nickname }) => {
  const actionGroupIds = useRecoilValue(actionGroupIdsState)

  return (
    <Stack alignItems={`center`} spacing={2} p={2}>
      {!nickname && (
        <ActionGroupCard id={ActionGroupFixedId.DailyPostWordChallenge} />
      )}
      {actionGroupIds.map((id) => (
        <ActionGroupCard key={id} id={id} nickname={nickname} />
      ))}
    </Stack>
  )
}

export default RitualsFrame
