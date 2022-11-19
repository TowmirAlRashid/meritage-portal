import { Box } from '@mui/material'
import React from 'react'
import InputBox from '../inputBox'

const RecordDetails = () => {
  return (
    <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}
    >
        <Box
            sx={{
                width: "48%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center"
            }}
        >
            <InputBox 
                labelId="Faucibus at"
                labelContent="Faucibus at"
            />
            <InputBox 
                labelId="Odio etiam"
                labelContent="Odio etiam"
            />
            <InputBox 
                labelId="Nisl dolor"
                labelContent="Nisl dolor"
            />
            <InputBox 
                labelId="Nisi orci"
                labelContent="Nisi orci"
            />
            <InputBox 
                labelId="Aliquet non"
                labelContent="Aliquet non"
            />
        </Box>
        <Box
            sx={{
                width: "48%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center"
            }}
        >
            <InputBox 
                labelId="Non nulla"
                labelContent="Non nulla"
            />
            <InputBox 
                labelId="Cursus tristique"
                labelContent="Cursus tristique"
            />
            <InputBox 
                labelId="Ac quam"
                labelContent="Ac quam"
            />
            <InputBox 
                labelId="Lacus nunc"
                labelContent="Lacus nunc"
            />
            <InputBox 
                labelId="Nunc lorem"
                labelContent="Nunc lorem"
            />
        </Box>
    </Box>
  )
}

export default RecordDetails