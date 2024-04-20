import { FC } from 'react'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import { List, Stack } from '@mui/material'
import ActionGroupCardModifyingOrder from '../molecule_action_group_card/index.modifying-order'

const SettingFrame: FC = () => {
  const actionGroupIds = useRecoilValue(actionGroupIdsState)

  return (
    <Stack alignItems={`center`} spacing={2} p={2}>
      <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
        {actionGroupIds.map((id) => (
          <ActionGroupCardModifyingOrder key={id} id={id} />
        ))}
      </List>
    </Stack>
  )
}

export default SettingFrame
