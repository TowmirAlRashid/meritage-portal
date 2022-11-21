import { Box, FormControl, InputLabel, MenuItem, Select, Typography, styled, InputBase, TableContainer, Table, TableBody, TableRow, TableCell, Pagination, TablePagination } from '@mui/material'
import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import EnhancedTableHead from './EnhancedTableHead';

import Link from 'next/link'
import EmptyData from './EmptyData';



const CustomizedTable = ({ data, entries, Search, SearchIconWrapper, StyledInputBase, query, setQuery, handleChange, page, setPage, handlePageChange }) => {

  const key = "eng_name"

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
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Search>
                </Box>
            </Box>
        </Box>

        {
            data?.length > 0 ?
                <TableContainer>
                <Box sx={{
                        pl: "1.5rem !important",
                        pr: "1.5rem !important"
                    }}>
                    <Table
                        aria-labelledby="tableTitle"
                        
                    >
                        <EnhancedTableHead />

                        <TableBody>
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
                                ?.map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        key={row.id}
                                    >
                                        <TableCell sx={{ paddingLeft: "1rem"}}>
                                            {row.id}
                                        </TableCell>
                                        <TableCell sx={{ paddingLeft: "1rem"}}>
                                            <Link href={`/admin/${row.eng_name}`}>
                                                <a style={{ color: "#0288D1" }}>{row.eng_name}</a>
                                            </Link>
                                        </TableCell>
                                        <TableCell sx={{ paddingLeft: "1rem"}}>{row.eng_date}</TableCell>
                                        <TableCell sx={{ paddingLeft: "1rem"}}>{row.eng_stage}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            margin: "1.5rem 2rem 1rem"
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
                </TableContainer> :
                <EmptyData />
        }
    </Box>
  )
}

export default CustomizedTable