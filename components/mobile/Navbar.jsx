import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import CustomIconButton from './CustomIconButton'

import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter()
    
  const handleProfileButtonClick = () => {
    router.push("/admin/change-password");
  }

  const handleDashboardClick = () => {
    router.push("/admin")
  }

  return (
    <AppBar 
        position="fixed" 
        color="primary" 
        sx={{ 
            top: 'auto', 
            bottom: 0,
            height: "5.5rem",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.15)"
        }}
    >
        <CustomIconButton text="Dashboard" icon={<ArticleIcon />} onclick={handleDashboardClick} />
        <CustomIconButton text="All Engagements" icon={<PeopleAltIcon />} onclick={handleDashboardClick} />
        <CustomIconButton text="Profile" icon={<AccountCircleIcon />} onclick={handleProfileButtonClick} />
    </AppBar>
  )
}

export default Navbar