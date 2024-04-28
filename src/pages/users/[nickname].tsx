import { useRouter } from 'next/router'
import { FC, useCallback, useEffect } from 'react'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import RitualsFrame from '@/components/organism_rituals_frame'
import Appbar from '@/components/organism_appbar'
import StyledCentered from '@/organisms/StyledCentered'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useUserByNickname } from '@/hooks/user/get-user-by-nickname.hook'
import StyledUserAvatar from '@/atoms/StyledUserAvatar'

const UserByNicknamePage: FC = () => {
  const router = useRouter()
  const { nickname } = router.query
  const [user, getUser] = useUserByNickname(nickname)

  useEffect(() => {
    getUser()
  }, [getUser])

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
      <Grid container>
        <Grid xs={2} style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack p={1}>
            <StyledUserAvatar
              imageUrl={user?.imageUrl ?? ''}
              sizePixels={150}
            />
            <Typography variant="body1" fontWeight={600}>
              {user?.displayingName}
            </Typography>
            <Typography variant="caption" color="grey">
              {user?.nickname}
            </Typography>
            <Typography variant="subtitle2" fontSize={10}>
              {user?.bio}
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={10}>
          <RitualsFrame nickname={nickname} />
        </Grid>
      </Grid>
      <RitualsFrame nickname={nickname} />
    </Appbar>
  )
}

export default UserByNicknamePage
