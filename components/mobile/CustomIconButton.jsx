
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'



// const useStyles = makeStyles(theme => ({
//     customHoverFocus: {
//       "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" }
//     }
//   }));


const CustomIconButton = ({ text, icon, onclick }) => {
    

  return (
    <IconButton
        sx={{
            width: "33.33%"
        }}
        onClick={onclick}
    >
        <Box>
            {icon}

            <Typography fontWeight="bold" fontSize={12} >
                {text}
            </Typography>
        </Box>
    </IconButton>
  )
}

export default CustomIconButton