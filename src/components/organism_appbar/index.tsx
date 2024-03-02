import { FC, Fragment } from 'react'
import { AppBar, Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppsIcon from '@mui/icons-material/Apps'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
import Image from 'next/image'
import EndUserAvatar from '@/components/atom_user_avatar/index.end-user'
import PostActionGroupDialog from '@/components/dialog_post_action_group'
import RitualsFrameRefreshButton from '@/components/organism_rituals_frame/index.refresh-button'
import AppbarGitHubButtonPart from '../atom_appbar_parts/index.github_icon'

const PRIVATE_TITLE = `Consistency GPT (Beta)`
const PRIVATE_TITLE_LOGO = `/favicon_archived/android-chrome-512x512.png`
interface Props {
  nickname?: string
  children?: JSX.Element | JSX.Element[]
}
const Appbar: FC<Props> = ({ children, nickname }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar variant="dense">
          <StyledIconButtonAtom jsxElementButton={<AppsIcon />} isDisabled />
          <Box width={10} />
          <Image
            src={PRIVATE_TITLE_LOGO}
            alt="logo"
            width={30}
            height={30}
            style={{ marginRight: 8 }}
          />
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            fontFamily={`Cormorant Garamond`}
          >
            {PRIVATE_TITLE}
          </Typography>
          <Box pr={2} />
          <Box flexGrow={1} />
          <RitualsFrameRefreshButton nickname={nickname} />
          {!nickname && (
            <Fragment>
              <Box pr={1} />
              <AppbarGitHubButtonPart />
              <Box pr={1} />
              <PostActionGroupDialog />
              <EndUserAvatar />
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Box height="calc(100vh - 48px)">{children}</Box>
    </Box>
  )
}

export default Appbar
