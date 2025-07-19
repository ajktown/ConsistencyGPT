import { FC, Fragment, JSX } from 'react'
import { AppBar, Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppsIcon from '@mui/icons-material/Apps'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
import EndUserAvatar from '@/components/atom_user_avatar/index.end-user'
import PostActionGroupDialog from '@/components/dialog_post_action_group'
import RitualsFrameRefreshButton from '@/components/organism_rituals_frame/index.refresh-button'
import AppbarGitHubButtonPart from '../atom_appbar_parts/index.github_icon'
import useWindowSize from 'react-use/lib/useWindowSize'
import RitualsFrameGauge from '../organism_rituals_frame/index.gauge'
import RitualsFrameGaugeDialog from '../organism_rituals_frame/index.gauge-dialog'
import { getAppBarColorLambda } from '@/lambdas/get-app-theme-color.lambda'
import { useRecoilValue } from 'recoil'
import { appThemeState } from '@/recoil/app-theme/app-theme.state'
import AppbarMainLogo from './index.main-logo'

const PRIVATE_TITLE = `Consistency GPT (Beta)`
const PRIVATE_SHORTER_TITLE = `CGT`
const PRIVATE_TITLE_VISIBLE_PIXELS = 500
const PRIVATE_GAUGE_VISIBLE_PIXELS = 850
interface Props {
  nickname?: string
  children?: JSX.Element | JSX.Element[]
}
const Appbar: FC<Props> = ({ children, nickname }) => {
  const appTheme = useRecoilValue(appThemeState)
  const { width } = useWindowSize()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: getAppBarColorLambda(appTheme) }}
      >
        <Toolbar variant="dense">
          <StyledIconButtonAtom jsxElementButton={<AppsIcon />} isDisabled />
          <Box width={10} />
          <AppbarMainLogo />
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
      <RitualsFrameGaugeDialog />
    </Box>
  )
}

export default Appbar
