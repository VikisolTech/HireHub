import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import PrivateDropdown from './PrivateDropDown';
import Dashboard from '@mui/icons-material/Dashboard';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';


function ClientNavBar() {
  const [boardClicked, setBoardClicked] = useState(false);
  const [listClicked, setListClicked] = useState(true); // Set listClicked to true initially

  useEffect(() => {
    // When the component mounts, set listClicked to true and boardClicked to false
    setListClicked(true);
    setBoardClicked(false);
  }, []);

  const handleBoardClick = () => {
    setBoardClicked(true);
    setListClicked(false);
  };

  const handleListClick = () => {
    setListClicked(true);
    setBoardClicked(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: "-45px" }}>
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between" }}>
        <PrivateDropdown />
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Dashboard
            sx={{
              fontSize: '15px',
              color: boardClicked ? "#1976d2" : "black",
              marginRight: '10px',
              cursor: 'pointer'
            }}
            onClick={handleBoardClick}
          />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: boardClicked ? "#1976d2" : "black",
              marginRight: '10px',
              cursor: 'pointer'
            }}
            onClick={handleBoardClick}
          >
            <Link to="/board">Board</Link>
          </Typography>
          <FormatListBulleted
            sx={{
              fontSize: '15px',
              color: listClicked ? "#1976d2" : "black",
              marginLeft: '20px',
              cursor: 'pointer'
            }}
            onClick={handleListClick}
          />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: listClicked ? "#1976d2" : "black",
              marginLeft: '10px',
              cursor: 'pointer'
            }}
            onClick={handleListClick}
          >
              <Link to="/clients">List</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ClientNavBar;
