import { Box, TextField } from '@mui/material'
import React from 'react'


const InputBox = ({ labelId, labelContent }) => {
  return (
        <Box 
          sx={{ 
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "1.5rem" 
          }}
        >
          <label id={labelId} style={{ width: "10rem"}}>{labelContent}</label>
          <TextField 
            id="currentPass" 
            variant="outlined"
            type="password"
            sx={{ width: "80%", "& .MuiInputBase-input": { padding: "10px 8px"}}}
          />
        </Box>
  )
}

export default InputBox