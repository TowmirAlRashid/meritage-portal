import { Box, Typography } from '@mui/material'
import React from 'react'
import EmptyDataIcon from "../assets/EmptyDataIcon.png";
import Image from "next/image"

const EmptyData = () => {
  return (
    <Box 
        sx={{
            width: "85%",
            height: "60vh",
            margin: "1.5rem auto",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <Box sx={{ mb: "0.7rem" }}>
            <Image 
                src={EmptyDataIcon}
                alt="Empty Data"
            />
        </Box>

        <Typography
            sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                mb: "1.5rem"
            }}
        >
            No Data Found
        </Typography>

        <Typography
            sx={{
                fontSize: "1rem"
            }}
        >
            Vel eleifend pellentesque pellentesque porta. Ultrices tempor tortor in eu arcu.
        </Typography>
    </Box>
  )
}

export default EmptyData