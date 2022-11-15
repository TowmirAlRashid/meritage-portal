import * as React from 'react';
import Image from "next/image"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

import Logo from "../../assets/Logo.png";
import MiniLogo from "../../assets/minilogo.png";
import SearchBox from '../../components/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomizedTable from '../../components/CustomizedTable';
import { Paper } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "white",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  boxShadow: "none",
  ...(open && {
    marginLeft: drawerWidth,
    paddingRight: "1rem",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - calc(${theme.spacing(8)} + 1px))`
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerAction = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Box 
        sx={{ 
          display: {
            lg: 'flex',
            md: 'flex',
            sm: "none",
            xs: "none"
          },
          width: "100%",
          height: "100%" 
        }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {open ? 
              <Image
                src={Logo}
                alt="client logo"
              /> :
              <Image 
                src={MiniLogo}
                alt="client Mini logo"
              />}
          </DrawerHeader>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: '100vh'
            }}
          >
            <Box>
              <List>
                {['Dashboard'].map((text) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        backgroundColor: "#0B4CCB",
                        "&:hover": {
                          backgroundColor: "#0B4CCB !important"
                        }
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: "white"
                        }}
                      >
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            
            <Box>
              <List>
                {['Sign Out'].map((text) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        border: `${open ? "1px solid #0B4CCB" : "none" }`,
                        borderRadius: "5px",
                        margin: "0 10px"
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: "#0B4CCB"
                        }}
                      >
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: "#0B4CCB" }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>

        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton 
              onClick={handleDrawerAction}
              sx={{
                border: "1px solid black",
                borderRadius: "50%",
                marginRight: "1.2rem"
              }}
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <SearchBox />

              <Box
                sx={{
                  width: "7.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "5px",
                  marginRight: "1.5rem",
                  "&:hover": {
                    backgroundColor: "rgba(11, 76, 203, 0.04)"
                  },
                  padding: "4px 8px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="black" fontWeight="bold" >BOOSTED</Typography>
                <AccountCircleIcon 
                  sx={{ 
                    color: "#0B4CCB", 
                    "&:hover": {
                      backgroundColor: "rgba(11, 76, 203, 0.04) !important"
                    } 
                  }} 
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%", height: "100%", backgroundColor: "#FAFAFA" }}>
          <DrawerHeader />
          
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "15px"
            }}
          >
            <CustomizedTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}