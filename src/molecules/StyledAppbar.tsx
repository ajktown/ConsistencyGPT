import { FC } from 'react'
import { AppBar, Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppsIcon from '@mui/icons-material/Apps'
import StyledIconButtonAtom from '@/atoms/StyledIconButton'
import Image from 'next/image'
import EndUserAvatar from '@/components/atom_user_avatar/index.end-user'

// TODO: Move this to non-molecules.
// TODO: Make this getting the children, create a new component Appbar and use it for the pages
interface Props {
  title: string
  titleLogoPath?: string // i.e) src="logo.png"
  children?: JSX.Element | JSX.Element[]
  onClickAppMenu?: () => any // if not given, the menu button will be disabled
}
const StyledAppbarMolecule: FC<Props> = ({ onClickAppMenu, ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar variant="dense">
          <StyledIconButtonAtom
            onClick={onClickAppMenu}
            jsxElementButton={<AppsIcon />}
            isDisabled={!onClickAppMenu}
          />
          <Box width={10} />
          {props.titleLogoPath && (
            <Image
              src={props.titleLogoPath}
              alt="logo"
              width={30}
              height={30}
              style={{ marginRight: 8 }}
            />
          )}
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            fontFamily={`Cormorant Garamond`}
          >
            {props.title}
          </Typography>
          <Box pr={2} />
          <Box flexGrow={1} />
          <EndUserAvatar />
        </Toolbar>
      </AppBar>
      <Box height="calc(100vh - 48px)">{props.children}</Box>
    </Box>
  )
}

export default StyledAppbarMolecule
