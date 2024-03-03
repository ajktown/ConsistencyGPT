import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import StyledTextField from '@/atoms/StyledTextField'
import StyledTextWithHeaderIcon from '@/atoms/StyledTextWithHeaderIcon'
import { usePostActionGroup } from '@/hooks/action-group/use-post-action-group.hook'
import StyledDialog from '@/organisms/StyledDialog'
import { DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material'
import React, { useCallback, useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import WarningInfoIcon from '@mui/icons-material/ReportGmailerrorred'
import StyledTimePicker from '@/atoms/StyledTimePicker'
import { DateTime } from 'luxon'

const PostActionGroupDialog = () => {
  const [isOpen, setOpen] = useState(false)
  const [task, setTask] = useState(``)
  const [startingTime, setStartingTime] = useState<null | DateTime>(null)
  const [endingTime, setEndingTime] = useState<null | DateTime>(null)

  const [loading, onPostActionGroup] = usePostActionGroup()

  const onPost = useCallback(async () => {
    if (!startingTime || !endingTime) return // cannot happen

    try {
      await onPostActionGroup({
        task,
        timezone: `Asia/Seoul`,
        openMinsAfter: startingTime.hour * 60 + startingTime.minute,
        closeMinsAfter: endingTime.hour * 60 + endingTime.minute,
      })

      // reset:
      setTask(``)
      setEndingTime(null)
      setStartingTime(null)

      // Close dialog:
      setOpen(false)
    } catch {}
  }, [startingTime, endingTime, task, onPostActionGroup])

  if (!isOpen)
    return (
      <StyledTextButtonAtom
        title={`Add New Consistency`}
        onClick={() => setOpen(true)}
      />
    )

  return (
    <StyledDialog onClose={() => setOpen(false)}>
      <DialogTitle>{`Add New Consistency`}</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <StyledTextField
            value={task}
            onChange={setTask}
            label={`Your Task Name`}
          />
          <StyledTimePicker
            label={`Commit Starting Time`}
            time={startingTime}
            onChange={setStartingTime}
          />
          <StyledTimePicker
            label={`Commit Ending Time`}
            time={endingTime}
            onChange={setEndingTime}
          />
          <StyledTextWithHeaderIcon
            headerIcon={<WarningInfoIcon fontSize="small" />}
            textProps={{
              fontFamily: `Cormorant Garamond`,
              variant: `caption`,
              fontStyle: `italic`,
            }}
            title={`Commit Starting Time must be smaller than Commit Ending Time.`}
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
          title={`Be careful. You cannot edit consistency after adding.`}
        />
        <StyledTextButtonAtom
          title="Add"
          onClick={onPost}
          isLoading={loading}
          isDisabled={
            !task ||
            !startingTime ||
            !endingTime ||
            endingTime.valueOf() <= startingTime.valueOf()
          }
        />
      </DialogActions>
    </StyledDialog>
  )
}

export default PostActionGroupDialog
