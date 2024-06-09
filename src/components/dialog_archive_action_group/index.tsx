import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import StyledTextField from '@/atoms/StyledTextField'
import StyledTextWithHeaderIcon from '@/atoms/StyledTextWithHeaderIcon'
import StyledDialog from '@/organisms/StyledDialog'
import { DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material'
import { useCallback, FC, useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { archivingActionGroupIdState } from '@/recoil/action-groups/action-groups.state'
import { postArchiveActionGroupApi } from '@/api/action-groups/post-archive-action-group.api'
import { useRituals } from '@/hooks/ritual/use-rituals.hook'

const ArchiveActionGroupDialog: FC = () => {
  const actionGroupId = useRecoilValue(archivingActionGroupIdState)
  const onClose = useResetRecoilState(archivingActionGroupIdState)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(``)
  const onGetRituals = useRituals()

  const onPost = useCallback(async () => {
    try {
      setLoading(true)
      await postArchiveActionGroupApi(actionGroupId, { message })
      onGetRituals()

      // Close dialog:
      onClose()
    } finally {
      setLoading(false)
    }
  }, [message, actionGroupId, onClose, onGetRituals])

  if (!actionGroupId) return null

  return (
    <StyledDialog onClose={onClose}>
      <DialogTitle>{`Are you sure you want to archive this action group?`}</DialogTitle>
      <DialogContent style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Stack spacing={1}>
          <StyledTextField
            isAutoFocused
            value={message}
            onChange={setMessage}
            label={`Please write your motives for archiving this action group.`}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <StyledTextWithHeaderIcon
          headerIcon={<WarningIcon color="warning" fontSize="small" />}
          textProps={{
            fontFamily: `Cormorant Garamond`,
            variant: `caption`,
            fontStyle: `italic`,
          }}
          title={`Be careful. You cannot unarchive action group after archiving.`}
        />
        <StyledTextButtonAtom
          title="Yes, Archive this."
          onClick={onPost}
          isLoading={loading}
          isDisabled={!message}
        />
      </DialogActions>
    </StyledDialog>
  )
}

export default ArchiveActionGroupDialog
