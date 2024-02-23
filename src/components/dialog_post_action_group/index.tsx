import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import StyledTextField from '@/atoms/StyledTextField'
import StyledTextWithIconHead from '@/atoms/StyledTextWithPrefixButton'
import { usePostActionGroup } from '@/hooks/action-group/use-post-action-group.hook'
import StyledDialog from '@/organisms/StyledDialog'
import { DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material'
import React, { useCallback, useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import WarningInfoIcon from '@mui/icons-material/ReportGmailerrorred'

const PostActionGroupDialog = () => {
  const [isOpen, setOpen] = useState(false)
  const [task, setTask] = useState(``)
  const [fromTime, setFromTime] = useState(`0`)
  const [toTime, setToTime] = useState(`1440`)

  const [loading, onPostActionGroup] = usePostActionGroup()

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
            label={`From Time Minutes: Between 0 ~ 1439`}
          />
          <StyledTextField
            value={toTime}
            onChange={setToTime}
            label={`Until Time Minutes: 1~1440`}
          />
          <StyledTextWithIconHead
            prefixIcon={<WarningInfoIcon fontSize="small" />}
            textProps={{
              fontFamily: `Cormorant Garamond`,
              variant: `caption`,
              fontStyle: `italic`,
            }}
            title={`AJK Town knows the UI is not ready yet. If FromTime == 240 (4am). If FromTime == 1200 (8pm).`}
          />
          <StyledTextWithIconHead
            prefixIcon={<WarningInfoIcon fontSize="small" />}
            textProps={{
              fontFamily: `Cormorant Garamond`,
              variant: `caption`,
              fontStyle: `italic`,
            }}
            title={`Sorry for the inconvenience. The time picker is coming up soon!`}
          />
          <StyledTextWithIconHead
            prefixIcon={<WarningInfoIcon fontSize="small" />}
            textProps={{
              fontFamily: `Cormorant Garamond`,
              variant: `caption`,
              fontStyle: `italic`,
            }}
            title={`fromTime must be smaller than toTime.`}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <StyledTextWithIconHead
          prefixIcon={<WarningIcon color="warning" fontSize="small" />}
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
            task.trim().length === 0 ||
            isNaN(parseInt(fromTime)) ||
            isNaN(parseInt(toTime)) ||
            parseInt(toTime) <= parseInt(fromTime)
          }
        />
      </DialogActions>
    </StyledDialog>
  )
}

export default PostActionGroupDialog
