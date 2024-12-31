import { FC, useCallback, useState } from 'react'
import { actionGroupIdsState } from '@/recoil/action-groups/action-groups.state'
import { useRecoilCallback, useRecoilValue } from 'recoil'
import { List, ListItem, ListItemText, Stack } from '@mui/material'
import SettingFrameRefresher from './index.setting-refresher'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ActionGroupCardTitle from '../molecule_action_group_card/index.title'
import { usePatchRitual } from '@/hooks/ritual/use-patch-ritual.hook'
import ThemedTextButtonAtom from '@/atoms_themed/ThemedTextButton'
import { useRouter } from 'next/router'
import { PageConst } from '@/constants/pages.constant'

const SettingFrame: FC = () => {
  const actionGroupIds = useRecoilValue(actionGroupIdsState)
  const onPatchRitual = usePatchRitual()
  const [highlightedId, setHighlightedId] = useState<string | null>(null)
  const router = useRouter()

  const onClickToHomePage = useCallback(() => {
    router.push(PageConst.Home)
  }, [router])

  const onClickSave = useCallback(async () => {
    try {
      await onPatchRitual({ actionGroupIds: actionGroupIds })
    } catch {}
  }, [actionGroupIds, onPatchRitual])

  const onClickArrow = useRecoilCallback(
    ({ set }) =>
      async (id: string, isUpward = true) => {
        const index = actionGroupIds.findIndex(
          (actionGroupId) => actionGroupId === id,
        )
        const newActionGroupIds = [...actionGroupIds]
        const tmp = newActionGroupIds[index]
        const newIndex = isUpward ? -1 : 1
        newActionGroupIds[index] = newActionGroupIds[index + newIndex]
        newActionGroupIds[index + newIndex] = tmp

        set(actionGroupIdsState, newActionGroupIds)

        // highlight modified action group so that it is  easier to track:
        setHighlightedId(id)
        setTimeout(() => setHighlightedId(null), 0.4 * 1000) // seconds
      },
    [actionGroupIds],
  )

  return (
    <Stack alignItems={`center`} spacing={2} p={2}>
      <ThemedTextButtonAtom
        title={`Back to main page`}
        onClick={onClickToHomePage}
      />
      <ThemedTextButtonAtom title={`Save`} onClick={onClickSave} />
      <List sx={{ width: `100%`, maxWidth: 700, bgcolor: `background.paper` }}>
        {actionGroupIds.map((id, i) => (
          <ListItem
            key={id}
            disableGutters
            sx={{ bgcolor: highlightedId === id ? `lightyellow` : `inherit` }}
            secondaryAction={
              <Stack alignItems={`center`} direction="row">
                <SettingFrameRefresher groupId={id} />
                <StyledIconButtonAtom
                  jsxElementButton={<ArrowUpwardIcon />}
                  onClick={() => onClickArrow(id)}
                  isDisabled={i === 0}
                />
                <StyledIconButtonAtom
                  jsxElementButton={<ArrowDownwardIcon />}
                  onClick={() => onClickArrow(id, false)}
                  isDisabled={i === actionGroupIds.length - 1}
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
