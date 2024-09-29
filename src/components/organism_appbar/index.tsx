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
import useWindowSize from 'react-use/lib/useWindowSize'
import RitualsFrameGauge from '../organism_rituals_frame/index.gauge'

const PRIVATE_TITLE = `Consistency GPT (Beta)`
const PRIVATE_SHORTER_TITLE = `CGT`
const PRIVATE_TITLE_VISIBLE_PIXELS = 500
const PRIVATE_GAUGE_VISIBLE_PIXELS = 850
const PRIVATE_TITLE_LOGO = `/favicon_archived/android-chrome-512x512.png`
interface Props {
  nickname?: string
  children?: JSX.Element | JSX.Element[]
}
const Appbar: FC<Props> = ({ children, nickname }) => {
  const { width } = useWindowSize()

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
          {width <= PRIVATE_TITLE_VISIBLE_PIXELS && (
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              fontFamily={`Cormorant Garamond`}
            >
              {PRIVATE_SHORTER_TITLE}
              {nickname && ` - ${nickname}`}
            </Typography>
          )}
          {PRIVATE_TITLE_VISIBLE_PIXELS <= width && (
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              fontFamily={`Cormorant Garamond`}
            >
              {PRIVATE_TITLE}
              {nickname && ` - ${nickname}`}
            </Typography>
          )}
          <Box pr={2} />
          <Box flexGrow={1} />
          {PRIVATE_GAUGE_VISIBLE_PIXELS <= width && <RitualsFrameGauge />}
          <RitualsFrameRefreshButton nickname={nickname} />
          <Box pr={1} />
          <AppbarGitHubButtonPart />
          {!nickname && (
            <Fragment>
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
