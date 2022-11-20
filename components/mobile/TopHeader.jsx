import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import Logo from "../../assets/Logo.png"

const TopHeader = () => {
  return (
    <Box
        sx={{
            width: "100%",
            height: "3.5rem",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 3px 3px -2px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.07), 0px 1px 10px rgba(0, 0, 0, 0.03)"
        }}
    >
        <Box width={110}>
            <Image 
                src={Logo}
                alt="logo"
            />
        </Box>
    </Box>
  )
}

export default TopHeader