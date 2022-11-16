import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import { useRouter } from "next/router";

import Logo from '../assets/Logo.png'
import Client from '../assets/Client.png'
import Investor from '../assets/Investor.png'

const RoleSelect = () => {
  const router = useRouter();

  const handleClientClick = () => {
    router.push("/admin");
  }

  return (
    <Box
        sx={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url('./select-role-bg.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center"
        }}
    >
        <Box
            sx={{
                width: {
                    xs: "90%",
                    sm: "50%",
                    md: "40%",
                    lg: "30%"
                },
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                margin: "auto auto"
            }}
        >
            <Card
                sx={{
                    width: "100%"
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        lineHeight: "30px",
                        textAlign: "center"
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: "0.3rem",
                            marginTop: "1.5rem"
                        }}
                    >
                        <Image 
                            src={Logo}
                            alt="company logo"
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: "600",
                            marginBottom: "2.5rem"
                        }}
                    >
                        Select your portal
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {
                                lg: "row",
                                md: "row",
                                sm: "column",
                                xs: "column"
                            },
                            justifyContent: "center",
                            gap: "1.5rem",
                            width: "80%",
                            margin: "0 auto 1rem"
                        }}
                    >
                        <Button
                            sx={{
                                "&:hover": {
                                    backgroundColor: "white !important"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: "9rem",
                                    height: "10rem",
                                    border: "1px solid rgba(11, 76, 203, 0.3)",
                                    borderRadius: "4px",
                                    padding: "1rem 1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    alignItems: "center",
                                    color: "black",
                                    "&:hover": {
                                        border: "1px solid #0B4CCB",
                                        boxShadow: "0px 4px 10px rgba(11, 76, 203, 0.2)",
                                        color: "#0B4CCB"
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "6rem"
                                    }}
                                >
                                    <Image
                                        src={Client}
                                        alt="client"
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontWeight: "bold"
                                    }}
                                >
                                    Client
                                </Typography>
                            </Box>
                        </Button>

                        <Button
                            sx={{
                                "&:hover": {
                                    backgroundColor: "white !important"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: "9rem",
                                    height: "10rem",
                                    border: "1px solid rgba(11, 76, 203, 0.3)",
                                    borderRadius: "4px",
                                    padding: "1rem 1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    alignItems: "center",
                                    color: "black",
                                    "&:hover": {
                                        border: "1px solid #0B4CCB",
                                        boxShadow: "0px 4px 10px rgba(11, 76, 203, 0.2)",
                                        color: "#0B4CCB"
                                    },
                                }}
                            >
                               <Box
                                    sx={{
                                        width: "6rem"
                                    }}
                                >
                                    <Image
                                        src={Investor}
                                        alt="Investor"
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontWeight: "bold"
                                    }}
                                >
                                    Investor
                                </Typography>
                            </Box>
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
  )
}

export default RoleSelect