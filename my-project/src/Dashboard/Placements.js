import * as React from 'react';
import Layout from './Layout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
      <div style={{ width: '100%', textAlign: 'center', padding: '30px' }}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}> No placement has been made yet</div>
        <div style={{ fontSize: "14px" }}>No placement has been made yet.</div>
      </div>

    </>
  );
}
