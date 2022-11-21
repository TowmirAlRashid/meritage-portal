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
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import Logo from "../../assets/Logo.png";
import MiniLogo from "../../assets/minilogo.png";
import CustomizedTable from '../../components/CustomizedTable';

import { data } from "../../data"

import { useRouter } from 'next/router'
import { useState } from 'react'
import ProfileOrLogout from '../../components/profile';
import TopHeader from '../../components/mobile/TopHeader';
import Navbar from '../../components/mobile/Navbar';
import { Divider, FormControl, InputBase, InputLabel, MenuItem, Pagination, Select } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { margin } from '@mui/system';
import CardToEngagement from '../../components/mobile/CardToEngagement';


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


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "4px",
  border: "1px solid rgba(0, 0, 0, 0.20)",
  "&:hover": {
      border: "1px solid rgba(0, 0, 0, 0.75)",
  },
  height: "2.5rem",
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.87)',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: {
    //       lg: 200,
    //       md: 100
    //   },
    // },
  },
}));

export default function MiniDrawer({ data }) {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  console.log(router.pathname.toString())

  const [entries, setEntries] = useState(10);

  const handleDrawerAction = () => {
    setOpen(!open);
  };


  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setEntries(event.target.value);
  };

  const [page, setPage] = React.useState(1);
  const handlePageChange = (_, value) => {
    setPage(value);
  };


  // const handleListItemClick = (text) => {
  //   switch(text) {
  //     case "Dashboard": router.push("/admin")
  //     case "All Engagements": router.push("/all-engagements")
  //   }
  // }


  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh !important",
        backgroundColor: "#F5F5F5",
        overflowY: "auto",
      }}
    >
      <Box        //Web and Tab view
        sx={{ 
          display: {
            lg: 'flex',
            md: 'flex',
            sm: "none",
            xs: "none"
          },
          width: "100%",
          height: "100vh" ,
          backgroundColor: "#F5F5F5",
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
              <Box sx={{ width: { lg: "11.4rem", md: "10rem" }}}>
                <Image
                  src={Logo}
                  alt="client logo"
                />
              </Box> :
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
                {['Dashboard', 'All Engagements'].map((text) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        backgroundColor: `${router.pathname.toString() === "/admin" ? "#0B4CCB" : "white"}`,
                        color: `${router.pathname.toString() === "/admin" ? "white" : "#0B4CCB"}`,
                        "&:hover": {
                          backgroundColor: "#0B4CCB !important"
                        }
                      }}
                      // onClick={handleListItemClick(text)}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: "white"
                        }}
                      >
                        {
                          text === "Dashboard" && <DashboardIcon />
                        }
                        {
                          text === "All Engagements" && <PeopleAltIcon />
                        }
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            
            {/* <Box>
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
            </Box> */}
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

        <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%", height: '100vh', mb: "1rem", backgroundColor: "#F5F5F5"}}>
          
          <DrawerHeader />
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              marginRight: "1rem",
              mb: 10,
            }}
          >
            <CustomizedTable 
              data={data} 
              router={router} 
              entries={entries} 
              setEntries={setEntries}
              Search={Search}
              SearchIconWrapper={SearchIconWrapper}
              StyledInputBase={StyledInputBase}
              query={query}
              setQuery={setQuery}
              handleChange={handleChange}
              page={page}
              setPage={setPage}
              handlePageChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>

      <Box        // mobile view
        sx={{ 
          display: {
            lg: 'none',
            md: 'none',
            sm: "block",
            xs: "block"
          },
          width: "100%",
          height: "100vh" ,
          backgroundColor: "#F5F5F5",
        }}
      >
        <TopHeader />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
            overflowY: "scroll",
            pb: "7rem",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: "92%",
              borderRadius: "15px",
              margin: "1rem auto 3rem",
              padding: "1.5rem 1rem 2rem"
            }}
          >
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                mb: "1.25rem"
              }}
            >
              Dashboard Data
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                mb: "2rem"
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="show-entries">Show Entries</InputLabel>
                <Select
                    labelId="show-entries"
                    id="select-show-entries"
                    value={entries}
                    label="Show Entries"
                    onChange={handleChange}
                    sx={{
                        "& .MuiSelect-select": {
                            padding: "8px 32px 8px 10px !important"
                        }
                    }}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
              </FormControl>

              <Search>
                  <SearchIconWrapper>
                      <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)"}} />
                  </SearchIconWrapper>
                  <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      sx={{ color: "black"}}
                      type="search"
                      fullWidth
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                  />
              </Search>
            </Box>

            <Box
              sx={{
                width: "98%",
                margin: "0 auto 2rem"
              }}
            >
              <Divider />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {
                data
                ?.filter((row) => {
                    if(query !== "") {
                        return row[key].toLowerCase().includes(query)
                    } else {
                        return row;
                    }
                })
                ?.filter((_, index) => index >= ((page - 1) * entries) && index < (page * entries))
                ?.map((row, index) => {
                  return (
                    <CardToEngagement 
                      key={row.id} 
                      index={row.id}
                      name={row.eng_name}
                      creationDate={row.eng_date} 
                      stage={row.eng_stage}
                    />
                  )
                })
              }
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                mt: "2rem"
              }}
            >
              <Typography>
                Showing {((page - 1) * entries) + 1} to {page < (data.length / entries) ? `${((page - 1) * entries) + entries}` : `${((page -1) * entries) + (data.length % entries)}`} of {data.length} entries
              </Typography>

              <Pagination 
                count={Math.ceil(data.length / entries)} 
                page={page} 
                variant="outlined" 
                shape="rounded"
                onChange={handlePageChange} 
                size="large"
                sx={{
                    "& .MuiPaginationItem-root.Mui-selected": {
                        color: "white",
                        backgroundColor: "#0B4CCB"
                    },
                    "& .MuiPaginationItem-root": {
                        border: "none !important"
                    }
                }}
              />
            </Box>
          </Box>
        </Box>

        <Navbar />
      </Box>
    </Box>
  );
}

export async function getStaticProps(){
  return {
    props: {
      data: data
    }
  }
}