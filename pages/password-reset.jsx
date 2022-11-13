import { Box } from '@mui/material'
import React from 'react'

const ForgotPass = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "25rem auto 20rem"
      }}
    >
        <h2>How could you forget your password? Next time write it down somewhere!</h2>
    </Box>
  )
}

export default ForgotPass