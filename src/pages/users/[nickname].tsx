import { useRouter } from 'next/router'
import { FC } from 'react'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import RitualsFrame from '@/components/organism_rituals_frame'
import Appbar from '@/components/organism_appbar'
import StyledCentered from '@/organisms/StyledCentered'
import { Typography } from '@mui/material'

const UserByNicknamePage: FC = () => {
  const router = useRouter()
  const { nickname } = router.query

  if (typeof nickname !== `string` || !nickname.trim())
    return (
      <StyledCentered>
        <Typography>{`User must be specified`}</Typography>
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
