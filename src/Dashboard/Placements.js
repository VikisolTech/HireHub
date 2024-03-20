import * as React from 'react';
import Layout from './Layout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Placements() {
  return (
    <>
      <Layout />
      <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: "-45px" }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: "black" }}>
            Placements
          </Typography>
        </Toolbar>
      </AppBar>
      <Box style={{ textAlign: 'center', padding: '30px',marginTop:"80px" }}>
        <img src="https://img.freepik.com/free-vector/man-woman-waiting-job-interview_23-2148638430.jpg" alt="Placement" width="300px" height="200px" 
        style={{ display:'inline',marginBottom:'10px'}}
       />
        <Box style={{ fontSize: "14px", fontWeight: "bold",marginBottom:'10px' }}>All placements will be displayed on this screen once the first placement has been made.</Box>
        <Box style={{ fontSize: "14px", color: "#1976d2",cursor: 'pointer'  }}>No placement has been made yet.</Box>
      </Box>





    </>
  );
}
