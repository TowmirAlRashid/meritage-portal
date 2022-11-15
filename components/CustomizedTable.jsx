import { Box, FormControl, InputLabel, MenuItem, Select, Typography, styled, InputBase, TableContainer, Table, TableBody } from '@mui/material'
import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import EnhancedTableHead from './EnhancedTableHead';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "4px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    "&:hover": {
        border: "1px solid rgba(0, 0, 0, 0.75)",
    },
    height: "2.5rem",
    marginRight: theme.spacing(2),
    marginLeft: 0,
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
      [theme.breakpoints.up('md')]: {
        width: {
            lg: 200,
            md: 100
        },
      },
    },
  }));



const CustomizedTable = () => {
  const [entries, setEntries] = useState(10);

  const handleChange = (event) => {
    setEntries(event.target.value);
  };

  return (
    <Box
        sx={{ paddingBottom: "1rem" }}
    >
        <Box
            sx={{
                padding: "2rem 1.5rem",
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row"
                }}
            >
                <Typography variant='h4' fontWeight="bold" sx={{ fontSize: { lg: "2rem", md: "1.5rem" } }}>List of Engagements</Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: "1.2rem"
                    }}
                >
                     <Box sx={{ minWidth: { lg: 200, md: 150 } }}>
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
                    </Box>

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
            </Box>
        </Box>

        <TableContainer>
            <Table
                aria-labelledby="tableTitle"
            >
                <EnhancedTableHead />

                <TableBody></TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default CustomizedTable