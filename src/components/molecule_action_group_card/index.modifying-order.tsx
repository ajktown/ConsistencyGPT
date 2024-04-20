import { FC, useCallback } from 'react'
import { ListItem, ListItemText, Stack } from '@mui/material'
import StyledCloudRefresher from '@/atoms/StyledCloudRefresher'
import { useActionGroupById } from '@/hooks/action-group/use-action-group-by-id.hook'
import ActionGroupCardTitle from './index.title'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

interface Props {
  id: string
}
const ActionGroupCardModifyingOrder: FC<Props> = ({ id }) => {
  const onGetActionGroupById = useActionGroupById(id)

  const onClickRefresh = useCallback(async () => {
    // run all together
    await Promise.all([onGetActionGroupById()])
  }, [onGetActionGroupById])

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <Stack alignItems={'center'} direction="row">
          <StyledCloudRefresher onClick={onClickRefresh} runOnClickOnce />
          <StyledIconButtonAtom jsxElementButton={<ArrowUpwardIcon />} />
          <StyledIconButtonAtom jsxElementButton={<ArrowDownwardIcon />} />
        </Stack>
      }
    >
      <ListItemText primary={<ActionGroupCardTitle id={id} />} />
    </ListItem>
  )
}

export default ActionGroupCardModifyingOrder
