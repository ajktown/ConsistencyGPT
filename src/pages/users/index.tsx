import { FC } from 'react'
import StyledCentered from '@/organisms/StyledCentered'
import { Typography } from '@mui/material'

const UsersPage: FC = () => {
  return (
    <StyledCentered>
      <Typography>{`User must be specified`}</Typography>
    </StyledCentered>
  )
}

export default UsersPage
