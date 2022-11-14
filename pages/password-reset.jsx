import { Box, Button, TextField, Typography } from "@mui/material";
import Image from 'next/image'
import { Controller, useForm } from "react-hook-form";
import ClientImage from "../assets/BG.png"
import Logo from '../assets/Logo.png'

import Link from 'next/link'
import { useRouter } from "next/router";

import CustomizedSnackbar from "../components/snackbar";
import { useState } from "react";


export default function Home() {
    const [state, setState] = useState({
      open: false,
      vertical: 'bottom',
      horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;

    const router = useRouter();

    const { control, handleSubmit } = useForm();

    const onsubmit = (data) => {
        console.log(data)
    }

    const handleResetPasswordClick = (newState, Transition) => () => {
      setState({ open: true, Transition, ...newState });
    };

    const handleClose = () => {
      setState({ ...state, open: false });
    };

  return (
    <Box 
      sx={{
        height: "100%",
        width: "100%"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // gap: "1rem"
        }}
      >
        <Box
          sx={{
            width: {
              lg: "60%",
              md: "45%",
            },
            height: "100%",
            display: {
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none"
            },
            justifyContent: "center",
            backgroundImage: "url('./Image.png')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <Box
            sx={{
              width: {
                lg: "70%",
                md: "80%"
              },
              height: "80%",
              margin: "5rem auto 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              lineHeight: "30px"
            }}
          >
            <Typography
              variant="h1"
              sx={{
                marginBottom: {
                  lg: "1.8rem",
                  md: "1.5rem",
                },
                fontWeight: "600",
                fontSize: {
                  lg: "60px",
                  md: "40px",
                },
                color: "white"
              }}
            >
              Welcome to <br /> Meritage Partners
            </Typography>

            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "18px",
                marginBottom: {
                  lg: "3.5rem",
                  md: "2.8rem",
                  sm: "2rem",
                }
              }}
            >
              130 Years of Collective Experience <br /> $2.0 Billion of Successful Transactions
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                width: "80%",
                marginBottom: "2rem",
                display: {
                  lg: "block",
                  md: "none",
                  sm: "none",
                  xs: "none"
                }
              }}
            >
              “Working with Meritage, we were able to find the right strategic partner that understood our capabilities, 
              identified our weaknesses such as HR and recruiting, and merge with a firm where not only our goals aligned, 
              but that we knew we could grow with.”
            </Typography>

            <Box
              sx={{
                display: {
                  lg: "flex",
                  md: "none",
                  sm: "none",
                  xs: "none"
                },
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: "1rem",
                alignItems:  "center",
              }}
            >
              <Box>
                <Image
                  src={ClientImage}
                  alt="client logo"
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "20px"
                  }}
                >
                  Larry Kaprielian
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.7)"
                  }}
                >
                  PRINCIPAL AT KNA STRUCTURAL ENGINEERS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: "100%",
            width: {
              lg: "40%",
              md: "55%",
              sm: "90%",
              xs: "90%"
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
              sx={{
                  width: "80%",
                  margin: "3rem auto 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  lineHeight: "30px",
                  textAlign: "center"
                }}
          >
              <Box
                  sx={{
                      marginBottom: "2.5rem"
                  }}
              >
                  <Image 
                      src={Logo}
                      alt="company logo"
                  />
              </Box>

              <Typography
                  sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "0.5rem"
                  }}
              >
                  Forgot Password
              </Typography>

              <Typography
                  sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "2.5rem",
                      color: "rgba(0, 0, 0, 0.6)"
                  }}
              >
                  Fill with your mail to receive instructions on how to reset your password.
              </Typography>

              <Box
                  component="form"
                  onSubmit={handleSubmit(onsubmit)}
                  sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "2rem",
                      marginBottom: "2rem"
                  }}
              >
                  <Controller
                      name="login_email"
                      control={control}
                      render={({ field }) => {
                          return (
                              <TextField 
                                  id="email" 
                                  label="Email" 
                                  variant="outlined"
                                  {...field} 
                                  type="email"
                                  helperText="Your registered email address"
                              />
                          )
                      }}
                  />

                  <Button
                      variant="contained"
                      type="submit"
                      sx={{ height: "3rem" }}
                      onClick={handleResetPasswordClick({
                        vertical: 'bottom',
                        horizontal: 'right',
                      })}
                  >
                      Reset Password
                  </Button>
              </Box>

              <Typography sx={{ color: "#0288D1"}}>
                  <Link href="/login">
                      <a>
                          Back To Log In
                      </a>
                  </Link>
              </Typography>

              <CustomizedSnackbar 
                vertical={vertical} 
                horizontal={horizontal} 
                open={open}
                handleClose={handleClose}
              />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
