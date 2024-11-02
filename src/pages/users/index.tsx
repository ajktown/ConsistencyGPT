import { FC, useCallback } from 'react'
import StyledCentered from '@/organisms/StyledCentered'
import { Typography } from '@mui/material'
import ThemedTextButtonAtom from '@/atoms_themed/ThemedTextButton'
import { useRouter } from 'next/router'
const UsersPage: FC = () => {
  const router = useRouter()

  const onClickToAdminProfile = useCallback(() => {
    router.push(`/users/mlajkim`)
  }, [router])

  return (
    <StyledCentered>
      <Typography>{`User must be specified`}</Typography>
      <ThemedTextButtonAtom
        title="To mlajkim's profile"
        onClick={onClickToAdminProfile}
      />
    </StyledCentered>
  )
}

export default UsersPage
