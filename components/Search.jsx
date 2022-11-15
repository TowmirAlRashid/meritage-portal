import { Box, styled, InputBase, alpha } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    '&:hover': {
        backgroundColor: "rgba(0, 0, 0, 0.09)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
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
      [theme.breakpoints.up('md')]: {
        width: '20rem',
      },
    },
  }));

const SearchBox = () => {
  return (
    <Box
      sx={{ width: {
        lg: "25rem",
        md: "20rem"
      }}}
    >
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)"}} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ color: "black"}}
            />
        </Search>
    </Box>
  )
}

export default SearchBox