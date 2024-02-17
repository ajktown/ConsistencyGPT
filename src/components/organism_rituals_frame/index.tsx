import { FC } from 'react'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import ActionGroupCard from '@/components/molecule_action_group_card'
import { Stack } from '@mui/material'
import { ActionGroupFixedId } from '@/constants/action-group.constant'

const RitualsFrame: FC = () => {
  const actionGroupIds = useRecoilValue(actionGroupIdsState)

  return (
    <Stack alignItems={`center`} spacing={2} p={2}>
      <ActionGroupCard id={ActionGroupFixedId.DailyPostWordChallenge} />
      {actionGroupIds.map((id) => (
        <ActionGroupCard key={id} id={id} />
      ))}
    </Stack>
  )
}

export default RitualsFrame
