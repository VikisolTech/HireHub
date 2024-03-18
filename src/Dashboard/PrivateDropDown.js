import React, { useState } from 'react';
import { Box, Typography, Popover, TextField, List, ListItem, ListItemText } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const PrivateDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const options = [
    { label: 'Private', starred: true },
    { label: 'Confidential', starred: false },
    { label: 'Public', starred: true },
    { label: 'No Ownership', starred: false },
    { label: 'Owner by Me', starred: true }
  ];

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  const handlePopupOpen = () => {
    setOpenPopup(true);
    handleClose(); // Close the dropdown when opening the popup
  };

  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }} onClick={handleOpen}>
        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: "black" }}>
          {selectedOption ? selectedOption.label : 'Private'}
        </Typography>
        <ArrowDropDownIcon sx={{ fontSize: '40px', color: "#1976d2", fill: "#1976d2" }} />
      </Box>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        style={{marginTop:"90px",marginLeft:"60px"}}
      >
        <List>
          {options.map(option => (
            <ListItem key={option.label} onClick={() => handleOptionClick(option)} style={{ cursor: 'pointer' }}>
              <ListItemText primary={option.label} />
              {option.starred ? <StarIcon /> : <StarBorderIcon />}
            </ListItem>
          ))}
          <ListItem onClick={handlePopupOpen} style={{ cursor: 'pointer' }}>
            <ListItemText primary="See All" />
          </ListItem>
        </List>
      </Popover>
      <Popup open={openPopup} onClose={handlePopupClose} />
    </div>
  );
};

const Popup = ({ open, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const options = [
    // { label: 'Private', starred: true },
    { label: 'Confidential', starred: false },
    { label: 'Public', starred: true },
    { label: 'No Ownership', starred: false },
    { label: 'Owner by Me', starred: true }
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
    >
      <Box p={2}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <List>
          {filteredOptions.map(option => (
            <ListItem key={option.label}>
              <ListItemText primary={option.label} />
              {option.starred ? <StarIcon /> : <StarBorderIcon />}
            </ListItem>
          ))}
        </List>
      </Box>
    </Popover>
  );
};

export default PrivateDropdown;
