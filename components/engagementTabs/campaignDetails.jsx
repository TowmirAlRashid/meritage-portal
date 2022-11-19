import { Box } from '@mui/material'
import React, { useState } from 'react'
import Campaign from './Campaign';

const CampaignDetails = () => {
    const [sentMail, setSentMail] = useState(77);
    const [progress1, setProgress1] = useState(95);
    const [progress2, setProgress2] = useState(35);
    const [progress3, setProgress3] = useState(88);

  return (
    <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            mb: "2rem"
        }}
    >
        <Campaign sentMail={sentMail} backgroundColor="#B2E2D0" progress={progress1} progressColor="#3FB68A" />

        <Campaign sentMail={sentMail} backgroundColor="#F2F4F4" progress={progress2} progressColor="#23A9E8" />

        <Campaign sentMail={sentMail} backgroundColor="#B2E2D0" progress={progress3} progressColor="#3FB68A" />
    </Box>
  )
}

export default CampaignDetails