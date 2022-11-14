import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import { useRouter } from "next/router";

import Logo from '../assets/Logo.png'

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
                            variant='contained'
                            sx={{
                                width: {
                                    md: "300px",
                                    lg: "400px",
                                    xl: "400px"
                                }
                            }}
                            onClick={handleClientClick}
                        >
                            CLIENT
                        </Button>

                        <Button
                            variant='outlined'
                            sx={{
                                width: {
                                    md: "300px",
                                    lg: "400px",
                                    xl: "400px"
                                }
                            }}
                        >
                            INVESTOR
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
  )
}

export default RoleSelect