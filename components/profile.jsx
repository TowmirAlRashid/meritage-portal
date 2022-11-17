import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileDialog from './modal';

const ProfileOrLogout = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
        <Button
            sx={{
                width: "7.5rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "5px",
                marginRight: "1.5rem",
                "&:hover": {
                backgroundColor: "rgba(11, 76, 203, 0.04)"
                },
                padding: "10px 14px",
                borderRadius: "4px"
            }}
            onClick={handleClickOpen}
        >
            <Typography color="black" fontWeight="bold" >BOOSTED</Typography>
            <AccountCircleIcon 
                sx={{ 
                    color: "#000", 
                    "&:hover": {
                        backgroundColor: "rgba(11, 76, 203, 0.04) !important"
                    } 
                }} 
            />
        </Button>

        <ProfileDialog
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
        />
    </>
  )
}

export default ProfileOrLogout