import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'

const ContactTarget = () => {
  return (
    <TableContainer>
            <Box sx={{
                    pl: "1.5rem !important",
                    pr: "1.5rem !important"
                }}>
                <Table
                    aria-labelledby="tableTitle"
                    
                >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                Head
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                Head
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                Head
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                Head
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow
                            hover
                        >
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                        </TableRow>

                        <TableRow
                            hover
                        >
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                        </TableRow>

                        <TableRow
                            hover
                        >
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                        </TableRow>

                        <TableRow
                            hover
                        >
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>
                                cell
                            </TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                            <TableCell sx={{ paddingLeft: "1rem"}}>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={5}
                    // rowsPerPage={rowsPerPage}
                    // page={page}
                    // onPageChange={handleChangePage}
                    // onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </TableContainer>
  )
}

export default ContactTarget