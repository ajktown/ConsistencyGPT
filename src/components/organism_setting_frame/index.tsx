import { FC, useCallback } from 'react'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilValue } from 'recoil'
import { List, ListItem, ListItemText, Stack } from '@mui/material'
import SettingFrameRefresher from './index.setting-refresher'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ActionGroupCardTitle from '../molecule_action_group_card/index.title'
import { usePatchRitual } from '@/hooks/ritual/use-patch-ritual.hook'

const SettingFrame: FC = () => {
  const actionGroupIds = useRecoilValue(actionGroupIdsState)
  const onPatchRitual = usePatchRitual()

  const onClickUp = useCallback(
    async (id: string) => {
      try {
        const index = actionGroupIds.findIndex(
          (actionGroupId) => actionGroupId === id,
        )
        const newActionGroupIds = [...actionGroupIds]
        const tmp = newActionGroupIds[index]
        newActionGroupIds[index] = newActionGroupIds[index - 1]
        newActionGroupIds[index - 1] = tmp
        console.log({ newActionGroupIds })
        await onPatchRitual({ actionGroupIds: newActionGroupIds })
      } catch {}
    },
    [actionGroupIds, onPatchRitual],
  )

  return (
    <Stack alignItems={`center`} spacing={2} p={2}>
      <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
        {actionGroupIds.map((id) => (
          <ListItem
            key={id}
            disableGutters
            secondaryAction={
              <Stack alignItems={'center'} direction="row">
                <SettingFrameRefresher groupId={id} />
                <StyledIconButtonAtom
                  jsxElementButton={<ArrowUpwardIcon />}
                  onClick={() => onClickUp(id)}
                />
                <StyledIconButtonAtom
                  jsxElementButton={<ArrowDownwardIcon />}
                />
              </Stack>
            }
          >
            <ListItemText primary={<ActionGroupCardTitle id={id} />} />
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default SettingFrame
