import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import RecordDetails from './engagementTabs/recordDetails';
import ContactTarget from './engagementTabs/contactTarget';
import CampaignDetails from './engagementTabs/campaignDetails';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

export default function EngagementDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
        sx={{ 
            backgroundColor: "white",
            borderRadius: "15px",
            // marginRight: "1rem",
            mb: 10, 
        }}
    >
      <Tabs value={value} onChange={handleChange} centered sx={{ "& .MuiTabs-flexContainer": {boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.12)"}}}>
        <Tab label="RECORD DETAILS" {...a11yProps(0)} />
        <Tab label="CONTACT TARGET" {...a11yProps(1)} />
        <Tab label="CAMPAIGN DETAILS" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <RecordDetails />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ContactTarget />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <CampaignDetails />
      </TabPanel>
    </Box>
  );
}