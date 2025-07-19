import StyledSwitch from '@/atoms/StyledSwitch'
import { usePatchPreference } from '@/hooks/preference/use-patch-preference.hook'
import { preferenceState } from '@/recoil/preferences/preference.state'
import { Stack, Typography } from '@mui/material'
import { FC, useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'

const UseProgressDialogSwitch: FC = () => {
  const useProgressDialog: boolean | undefined =
    useRecoilValue(preferenceState)?.useProgressDialog
  const onPatchPreference = usePatchPreference()

  const [loading, setLoading] = useState(false)

  const onChange = useCallback(async () => {
    try {
      setLoading(true)
      await onPatchPreference({ useProgressDialog: !useProgressDialog })
    } finally {
      setLoading(false)
    }
  }, [useProgressDialog, onPatchPreference, setLoading])

  return (
    <Stack alignItems={`center`} spacing={2} p={2} direction="row">
      <Typography>{`Use Progress Dialog?`}</Typography>
      <StyledSwitch
        tooltipProps={{
          title: useProgressDialog
            ? `Hide archived words`
            : `Show archived words`,
        }}
        switchProps={{
          onChange,
          checked: useProgressDialog || loading,
          disabled: useProgressDialog === undefined, // if undefined (So not boolean) we do not have data yet so we disable the switch
        }}
      />
    </Stack>
  )
}

export default UseProgressDialogSwitch
