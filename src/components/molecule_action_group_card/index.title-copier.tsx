import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
interface Props {
  id: string
}

const ActionGroupCardTitleCopier: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))

  const onClick = useCallback(() => {
    if (!actionGroup) return // disabled as action-group info is not loaded yet
    navigator.clipboard.writeText(actionGroup.props.task)
  }, [actionGroup])

  if (!actionGroup) return null

  return (
    <StyledIconButtonAtom
      onClick={onClick}
      isDisabled={!actionGroup}
      jsxElementButton={<ContentCopyIcon fontSize="small" />}
    />
  )
}

export default ActionGroupCardTitleCopier
