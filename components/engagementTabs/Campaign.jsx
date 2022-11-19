import { Box, Typography } from '@mui/material'
import { DateTime } from 'luxon'
import React from 'react'

const Campaign = ({ sentMail, backgroundColor, progress, progressColor }) => {
  return (
    <Box
        sx={{
            width: {
                lg: "84%",
                md: "94%"
            },
            margin: "0 auto 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Typography sx={{ fontSize: "2.125rem", fontWeight: "bold" }}>{sentMail}</Typography>

        <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "rgba(0, 0, 0, 0.6)", mb: "0.4rem" }}>Total Emails Sent</Typography>

        <Typography sx={{ fontSize: "1rem",fontWeight: "bold", color: "rgba(0, 0, 0, 0.6)" }}>{
            `${DateTime.now().toLocaleString(DateTime.DATE_MED) + " " + DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)}`
        }</Typography> 

        <Box 
            sx={{
                width: {
                    lg: "80%",
                    md: "94%"
                },
                margin: "1rem auto 1rem",
                height: "2.5rem",
                backgroundColor: `${backgroundColor}`,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <Box 
            sx={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: `${progressColor}`
            }}
            ></Box>
            <Box 
            sx={{
                height: "100%",
                width: `calc(100% - ${progress})%`
            }}
            ></Box>
        </Box>

        <Box 
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: {
                    lg: "80%",
                    md: "94%"
                },
                margin: "1rem auto 1rem",
            }}
        >
            <Box 
                sx={{
                    width: "33%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start", 
                    gap: "0.8rem"  
                }}
            >
                <Box sx={{ width: "14px", height: "14px", borderRadius: "2px", backgroundColor: "#3FB68A" }}></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>
                        Delivered {progress}% 
                    </Typography>
                    <Typography>
                        Delivered {progress}% 
                    </Typography>
                </Box>
            </Box>

            <Box 
                sx={{
                    width: "33%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start", 
                    gap: "0.8rem"  
                }}
            >
                <Box sx={{ width: "14px", height: "14px", borderRadius: "2px", backgroundColor: "#F88667" }}></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>
                        Delivered {progress}% 
                    </Typography>
                    <Typography>
                        Delivered {progress}% 
                    </Typography>
                </Box>
            </Box>

            <Box 
                sx={{
                    width: "33%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start", 
                    gap: "0.8rem"  
                }}
            >
                <Box sx={{ width: "14px", height: "14px", borderRadius: "2px", backgroundColor: "#F8E585" }}></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>
                        Delivered {progress}% 
                    </Typography>
                    <Typography>
                        Delivered {progress}% 
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Campaign