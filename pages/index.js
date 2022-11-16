import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router'


export default function Home({loggedInUser}) {
  const router = useRouter();
  // if(loggedInUser === ""){
  //   router.push("/login")
  // }
  return (
    <Box 
      sx={{
        height: "100%",
        width: "100%",
        textAlign: "center"
      }}
    >
      {/* {
        console.log({loggedInUser})
      } */}
      <h1>Home</h1>
    </Box>
  )
}
