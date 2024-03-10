import React, { useState } from 'react';
import Layout from './Layout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ClientNavBar from './ClientNavbar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


export default function Board() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Layout />
      <ClientNavBar />
      <Box style={{ height: 400, width: '100%', paddingLeft: '30px', paddingRight: '30px', marginTop: "20px" }}>

        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginTop: "20px" }}>Clients
          <Button
            // variant="outlined"
            color="primary"
            style={{
              marginBottom: '16px',
              marginTop: '10px',
              paddingRight: "30px"

            }}
          >
            <AddIcon
              style={{
                marginRight: '4px',
                border: '2px solid #1976d2',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
              }}
            />
          </Button>
        </Typography>

      </Box>
    </>
  );
}
