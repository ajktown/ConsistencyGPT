import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
interface Props {
  id: string
}

/**
 * ActionGroupCardTitleCopier renders a copy button for action-group's task if it exists
 */
const ActionGroupCardTitleCopier: FC<Props> = ({ id }) => {
  // task "": we have nothing to copy, so the button will be disabled (hidden)
  // task non-empty-string: we have something to copy, so the button will be enabled (shown)
  const task: string = useRecoilValue(actionGroupFamily(id))?.props.task ?? ``

  const onClick = useCallback(() => {
    if (!task) return // disabled as action-group info is not loaded yet
    navigator.clipboard.writeText(task)
  }, [task])

  if (!task) return null

  return (
    <StyledIconButtonAtom
      onClick={onClick}
      jsxElementButton={<ContentCopyIcon fontSize="small" />}
    />
  )
}

export default ActionGroupCardTitleCopier
