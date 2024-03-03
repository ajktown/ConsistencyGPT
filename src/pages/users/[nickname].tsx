import { useRouter } from 'next/router'
import { FC, useCallback } from 'react'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import RitualsFrame from '@/components/organism_rituals_frame'
import Appbar from '@/components/organism_appbar'
import StyledCentered from '@/organisms/StyledCentered'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { Typography } from '@mui/material'

const UserByNicknamePage: FC = () => {
  const router = useRouter()
  const { nickname } = router.query

  const onClickToAdminProfile = useCallback(() => {
    router.push(`/users/mlajkim`)
  }, [router])

  // This never happens because it will be considered as /users/index.tsx (for ts sake only)
  if (typeof nickname !== `string` || !nickname.trim()) return null

  if (nickname !== `mlajkim`)
    return (
      <StyledCentered>
        <Typography>{`Currently user "${nickname}" is not supported`}</Typography>
        <StyledTextButtonAtom
          title="To mlajkim's profile"
          onClick={onClickToAdminProfile}
        />
      </StyledCentered>
    )

  return (
    <Appbar nickname={nickname.trim()}>
      <ErrorApiConnectionFail />
      <RitualsFrame nickname={nickname} />
    </Appbar>
  )
}

export default UserByNicknamePage
