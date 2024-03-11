import React, { useState } from 'react';
import Layout from './Layout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ClientNavBar from './ClientNavbar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';
import ImageUpload from './ImageUpload';
import ClentDescription from './ClientDescription';
import TextField from '@mui/material/TextField';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


export default function Board() {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(true); // Change to true

  const handleToggleOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  const [description, setDescription] = useState('');

  // Define the handler function to update description state
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const [rows, setRows] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [newRow, setNewRow] = React.useState({ jobCount: '', ClientName: '', age: '' });

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setRows([...rows, { id: rows.length + 1, ...newRow }]);
    setNewRow({ jobCount: '', ClientName: '', age: '' });
    setOpen(false);
  };

  const handleEdit = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
  }
 
  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <>
      <Layout />
      <ClientNavBar />
      <Box style={{ height: 400, width: '100%', paddingLeft: '30px', paddingRight: '30px', marginTop: "20px" }}>
      <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'Black', textAlign: 'center', marginTop: "20px" }}>
        Clients
        <Button
          color="primary"
          style={{
            marginBottom: '16px',
            marginTop: '10px',
            paddingRight: "30px"
          }}
          onClick={handleOpen} // Open the dialog when the button is clicked
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

      <Dialog open={open} sx={{ '& .MuiPaper-root.MuiPaper-elevation24.MuiPaper-rounded.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm': { width: '100%' } }}
        >
          <Box sx={{ paddingTop: "20px" }}>
            <Box display={{ display: "flex", justifyContent: "space-between" }}>
              <DialogTitle
                id="form-dialog-title"
                sx={{ textAlign: "center", fontSize: '18px', fontWeight: 'bold', color: 'black' }}
              >
               Create Client

              </DialogTitle>
              <Typography sx={{ textAlign: "center", fontSize: '18px', fontWeight: 'bold', color: 'black', marginTop: "15px", marginRight: "10px" }}>
                <IconButton aria-label="close" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>

              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: "25px", paddingRight: "25px" }}>
            <Typography sx={{ color: "#767676", fontSize: '14px' }}>
              Creating clients will allow you to structure your account by adding jobs, contacts, and guests under each of those clients.
              <Link
                href="#"
                sx={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer', '&:hover': { color: 'darkblue' } }}
              >
                Learn more
              </Link>
            </Typography>
          </Box>
          <DialogContent>
            <Box  sx={{ display: "flex",marginTop:"20px" }}>
            <ImageUpload />
            <TextField
              autoFocus
              margin="dense"
              name="ClientName"
              label="Client Name"
              type="text"
              value={newRow.ClientName}
              onChange={handleChange}
              fullWidth
              sx={{ marginLeft: "30px" }}
            />
            </Box>
           
            <Box >
              {showAdvancedOptions && (
                <>
                  <TextField
                    label="Add Website"
                    fullWidth
                 sx={{marginTop:"15px"}}
                  />
                  <TextField
                    label="Add Location"
                    fullWidth
                    sx={{marginTop:"15px"}}
                  />
                  <ClentDescription 
                 
                  description={description} handleDescriptionChange={handleDescriptionChange} />
                </>
              )}

            </Box>


          </DialogContent>


          <DialogActions sx={{ marginBottom: "10px", padding: "25px", display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: '#1976d2',
                cursor: 'pointer',
                fontSize: '14px',
                paddingLeft: '25px',
                '&:hover': {
                  color: 'darkblue',
                  textDecoration: 'underline', // Add underline on hover
                },
              }}
              onClick={handleToggleOptions}
            >
              {showAdvancedOptions ? "- Advanced Options" : "+ Advanced Options"}
            </Typography>
            <Box>
              <Button sx={{ marginRight: "12px" }} variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleSave}>Continue</Button>
            </Box>

          </DialogActions>
        </Dialog>
    </Box>
    </>
  );
}
