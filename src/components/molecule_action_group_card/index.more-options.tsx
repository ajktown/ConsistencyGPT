import { FC, useCallback } from 'react'
import MoreIcon from '@mui/icons-material/MoreVert'
import StyledIconButtonWithMenuAtom from '@/atoms/StyledIconButtonWithMenu'

interface Props {
  id: string // action group id
  nickname?: string
}
const ActionGroupCardMoreOptions: FC<Props> = ({ id, nickname }) => {
  const isOnClickCommitLateDisabled = false // TODO: Implement this

  const onClickCommitLate = useCallback(async () => {
    console.log(`hello world!` + id)
    // TODO: Implement this
  }, [id])

  if (nickname) return null // if it is shared mode (or has nickname), do not show the button

  return (
    <StyledIconButtonWithMenuAtom
      menus={[
        {
          title: `Commit Late`,
          isDisabled: isOnClickCommitLateDisabled,
          onClick: onClickCommitLate,
        },
      ]}
      jsxElementButton={<MoreIcon />}
      onClick={onClickCommitLate}
    />
  )
}

export default ActionGroupCardMoreOptions
