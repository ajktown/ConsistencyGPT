import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import StyledTextField from '@/atoms/StyledTextField'
import { usePostActionGroup } from '@/hooks/action-group/use-post-action-group.hook'
import StyledDialog from '@/organisms/StyledDialog'
import { DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material'
import React, { useCallback, useState } from 'react'

const PostActionGroupDialog = () => {
  const [isOpen, setOpen] = useState(false)
  const [task, setTask] = useState(``)
  const [fromTime, setFromTime] = useState(`0`)
  const [toTime, setToTime] = useState(`1440`)

  const onPostActionGroup = usePostActionGroup()

  const onPost = useCallback(async () => {
    try {
      await onPostActionGroup({
        task,
        timezone: `Asia/Seoul`,
        openMinsAfter: parseInt(fromTime),
        closeMinsAfter: parseInt(toTime),
      })
      // reset:
      setTask(``)
      setFromTime(`0`)
      setToTime(`1440`)
      setOpen(false)
    } catch {}
  }, [task, fromTime, toTime, onPostActionGroup])

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
          <StyledTextField
            value={fromTime}
            onChange={setFromTime}
            label={`From Time: Between 0 ~ 1439`}
          />
          <StyledTextField
            value={toTime}
            onChange={setToTime}
            label={`Until Time: 1~1440`}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <StyledTextButtonAtom title="Add" onClick={onPost} />
      </DialogActions>
    </StyledDialog>
  )
}

export default PostActionGroupDialog
