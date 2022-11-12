import { Box, Typography } from "@mui/material";
import Image from 'next/image'
import ClientImage from "../assets/BG.png"


export default function Home() {
  return (
    <Box 
      sx={{
        height: "100%",
        width: "100%",
        textAlign: "center"
      }}
    >
      <h1>Home</h1>
    </Box>
  )
}
