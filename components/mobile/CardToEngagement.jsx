import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'

const CardToEngagement = ({ index, name, creationDate, stage }) => {
  return (
    <Card sx={{ width: "100%", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)" }}>
      <CardContent>
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.6rem",
                ml: "0.6rem",
                mr: "0.6rem"
            }}
        >
            <Typography>#</Typography>
            <Typography>{index}</Typography>
        </Box>

        <Divider />

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "4px",
                m: "0.6rem"
            }}
        >
            <Typography fontWeight="bold" >Engagement Name</Typography>
            <Typography>{name}</Typography>
        </Box>

        <Divider />

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "4px",
                m: "0.6rem"
            }}
        >
            <Typography fontWeight="bold" >Engagement Creation Date</Typography>
            <Typography>{creationDate}</Typography>
        </Box>

        <Divider />

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "4px",
                m: "0.6rem"
            }}
        >
            <Typography fontWeight="bold" >State of Engagement</Typography>
            <Typography>{stage}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardToEngagement