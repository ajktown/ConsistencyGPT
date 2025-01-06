import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { useDeleteActionsByActionGroupId } from '@/hooks/action-group/use-delete-actions-by-action-group-id.hook'
import StyledDialog from '@/organisms/StyledDialog'
import { yesterdayActionDeletingACtionGroupIdState } from '@/recoil/action-groups/action-groups.state'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { FC, useCallback } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'

const YesterdayActionDeletingWarningDialog: FC = () => {
  const yesterdayActionDeletingActionGroupId = useRecoilValue(
    yesterdayActionDeletingACtionGroupIdState,
  )
  const onClose = useResetRecoilState(yesterdayActionDeletingACtionGroupIdState)

  const [loadingDeleteYesterday, onDeleteYesterdayActionsByActionGroupId] =
    useDeleteActionsByActionGroupId(
      yesterdayActionDeletingActionGroupId,
      `yesterday`,
    )

  const onClickDelete = useCallback(async () => {
    try {
      await onDeleteYesterdayActionsByActionGroupId()
      onClose() // close dialog
    } catch {}
  }, [onDeleteYesterdayActionsByActionGroupId, onClose])

  if (yesterdayActionDeletingActionGroupId === ``) return null

  return (
    <StyledDialog visuals={{ maxWidth: `xs` }} onClose={onClose}>
      <DialogTitle>{`Are you sure?`}</DialogTitle>
      <DialogContent>
        <DialogContentText>{`By clicking "delete", your yesterday’s action will be permanently deleted and cannot be undone.`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <StyledTextButtonAtom
          variant="text"
          title="Cancel"
          onClick={onClose}
          isDisabled={loadingDeleteYesterday}
        />
        <StyledTextButtonAtom
          variant="contained"
          title="Yes, Delete it."
          color="error"
          isLoading={loadingDeleteYesterday}
          onClick={onClickDelete}
        />
      </DialogActions>
    </StyledDialog>
  )
}

export default YesterdayActionDeletingWarningDialog
