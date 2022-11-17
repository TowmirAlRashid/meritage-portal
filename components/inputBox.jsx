import { Box, TextField } from '@mui/material'
import React from 'react'


const InputBox = ({ label, labelContent }) => {
  return (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        m: "0 auto 1.5rem"
      }}>
        <Box sx={{ width: "30%", fontSize: "18px" }}>
          <label htmlFor={label}>{labelContent}</label>
        </Box>
        <Box sx={{ width: "65%"}}>
          <TextField
            sx={{ width: "100%", backgroundColor: "transparent" }}
            id={label}
          />
        </Box>
    </Box>
  )
}

export default InputBox