import * as React from 'react';
import Image from "next/image"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';

import Logo from "../../assets/Logo.png";
import MiniLogo from "../../assets/minilogo.png";


import { useRouter } from 'next/router'
import { useState } from 'react'
import ProfileOrLogout from '../../components/profile';
import BackToAdmin from '../../components/backToAdmin';
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import CustomizedSnackbar from '../../components/snackbar';


const drawerWidth = 200;

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

export default function MiniDrawer({ data }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const [entries, setEntries] = useState(10);

  const handleDrawerAction = () => {
    setOpen(!open);
  };

  const { control, handleSubmit } = useForm();

  const onsubmit = (data) => {
      console.log(data)
  }

  const [state, setState] = useState({
    openSnack: false,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const { vertical, horizontal, openSnack } = state;

  const handleClose = () => {
    setState({ ...state, openSnack: false });
  };

  const handleUpdateClick = (newState, Transition) => () => {
    setState({ openSnack: true, Transition, ...newState });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100% !important",
        backgroundColor: "#F5F5F5"
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
          height: "100vh" 
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
                justifyContent: "flex-end"
              }}
            >
              <ProfileOrLogout />
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%", height: '100vh', backgroundColor: "#F5F5F5"}}>
          
          <DrawerHeader />

          <BackToAdmin text="Change Password" />

          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              marginRight: "1rem",
              mb: 10,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit(onsubmit)}
              sx={{
                padding: "3rem 2rem 2rem"
              }}
            >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: "1.5rem"
                  }}
                >
                    <label id='currentPass' style={{ width: "15rem"}}>Current Password</label>
                    <Controller
                      name="current password"
                      control={control}
                      render={({ field }) => {
                          return (
                              <TextField 
                                  id="currentPass" 
                                  variant="outlined"
                                  {...field} 
                                  type="password"
                                  sx={{ width: "60%", "& .MuiInputBase-input": { padding: "10px 8px"}}}
                              />
                          )
                      }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: "1.5rem"
                  }}
                >
                    <label id='newPass' style={{ width: "15rem"}}>New Password</label>
                    <Controller
                      name="new password"
                      control={control}
                      render={({ field }) => {
                          return (
                              <TextField 
                                  id="newPass" 
                                  variant="outlined"
                                  {...field} 
                                  type="password"
                                  sx={{ width: "60%", "& .MuiInputBase-input": { padding: "10px 8px"}}}
                              />
                          )
                      }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: "2.5rem"
                  }}
                >
                    <label id='confirmNewPass' style={{ width: "15rem"}}>Confirm New Password</label>
                    <Controller
                      name="confirm new password"
                      control={control}
                      render={({ field }) => {
                          return (
                              <TextField 
                                  id="confirmNewPass" 
                                  variant="outlined"
                                  {...field} 
                                  type="password"
                                  sx={{ width: "60%", "& .MuiInputBase-input": { padding: "10px 8px"} }}
                              />
                          )
                      }}
                  />
                </Box>

                <Button
                  type='submit'
                  onClick={handleUpdateClick({
                    vertical: 'bottom',
                    horizontal: 'right',
                  })}
                  variant="contained"
                  sx={{ height: "3rem", width: "8rem", backgroundColor: "#0B4CCB" }}
                >
                  Update
                </Button>

                <CustomizedSnackbar 
                  vertical={vertical} 
                  horizontal={horizontal} 
                  openSnack={openSnack}
                  handleClose={handleClose}
                  message="Your Password is Updated"
                />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}