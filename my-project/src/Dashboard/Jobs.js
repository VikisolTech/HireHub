import React, { useState } from 'react';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Link } from '@mui/material';
import ImageUpload from './ImageUpload';
import ClentDescription from './ClientDescription';



export default function Jobs() {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(true); // Change to true
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [hoveredTemplate, setHoveredTemplate] = React.useState(false);
  const [openTemplateForm, setOpenTemplateForm] = React.useState(false);
  const [description, setDescription] = useState('');
  const [modalStyle, setModalStyle] = React.useState({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  const handleToggleOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnterTemplate = () => {
    setHoveredTemplate(true);
  };

  const handleMouseLeaveTemplate = () => {
    setHoveredTemplate(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenForm = () => {
    setOpenForm(true);
    setModalStyle({
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    });
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleOpenTemplateForm = () => {
    setOpenTemplateForm(true);
    setModalStyle({
      top: '20%', // Adjust this value to control how much the modal drops down
      left: '50%',
      transform: 'translate(-50%, -20%)', // Adjust this value to center the modal horizontally
    });
  };



  const handleCloseTemplateForm = () => {
    setOpenTemplateForm(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // Check if event and event.target are defined
    if (!event || !event.target) {
      console.error("Event or event.target is undefined.");
      return;
    }

    // Capture form data
    const formData = {
      id: rows.length + 1, // Generate a unique ID for the new row
      'Position Name': event.target.positionName ? event.target.positionName.value : '',

    };

    // Add new row to the table
    setRows([...rows, formData]);
    handleCloseForm();
  };


  const handleSubmitTemplateForm = (event) => {
    event.preventDefault();

    // Check if event and event.target are defined
    if (!event || !event.target) {
      console.error("Event or event.target is undefined.");
      return;
    }

    // Capture form data
    const formData = {
      id: rows.length + 1, // Generate a unique ID for the new row
      'Position Name': event.target.positionName ? event.target.positionName.value : '',

    };

    // Add new row to the table
    setRows([...rows, formData]);
    handleCloseForm(); // 
  };

  const [rows, setRows] = React.useState([]);
  const [newRow, setNewRow] = React.useState({
    id: '',
    'Position Name': '',
    'Job Client': '',
    'Job Location': '',
    'Headcount': '',
    'Job Stage': '',
    'Minimum Salary': '',
    'Maximum Salary': '',
    'Job Owner': '',
    'Job Team': '',
    'Job Status': '',
    'Job Created Date': ''
  });

  const handleAdd = () => {
    setOpen(true);
  };

  const handleSave = () => {
    setRows([...rows, { ...newRow }]);
    setNewRow({
      id: '',
      'Position Name': '',
      'Job Client': '',
      'Job Location': '',
      'Headcount': '',
      'Job Stage': '',
      'Minimum Salary': '',
      'Maximum Salary': '',
      'Job Owner': '',
      'Job Team': '',
      'Job Status': '',
      'Job Created Date': ''
    });
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
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Position Name', headerName: 'Position Name', width: 100, editable: true },
    { field: 'Job Client', headerName: 'Job Client', width: 100, editable: true },
    { field: 'Job Location', headerName: 'Job Location', width: 100, editable: true },
    { field: 'Headcount', headerName: 'Headcount', width: 100, editable: true },
    { field: 'Job Stage', headerName: 'Job Stage', width: 100, editable: true },
    { field: 'Minimum Salary', headerName: 'Minimum Salary', width: 100, editable: true },
    { field: 'Maximum Salary', headerName: 'Maximum Salary', width: 100, editable: true },
    { field: 'Job Owner', headerName: 'Job Owner', width: 100, editable: true },
    { field: 'Job Team', headerName: 'Job Team', width: 100, editable: true },
    { field: 'Job Status', headerName: 'Job Status', width: 100, editable: true },
    { field: 'Job Created Date', headerName: 'Job Created Date', width: 150, editable: true },
  ];

  return (
    <>
      <Layout />
      <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: '-45px' }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: 'black' }}>
            Jobs
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ height: 400, width: '100%', paddingLeft: '30px', paddingRight: '30px', marginTop: '30px' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: '16px', fontSize: '12px' }}
          onClick={handleAdd}
        >
          <Typography style={{ fontSize: '12px', fontWeight: 'normal', textTransform: 'none' }}>
            + Create Job
          </Typography>
        </Button>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          pagination
          paginationMode="server"
          checkboxSelection
          disableSelectionOnClick
          autoHeight
          style={{ border: '1px solid #ccc', borderRadius: '5px' }}
          headerStyle={{ padding: '8px' }}
          onEditCellChangeCommitted={(editCellChangeParams) => {
            const { id, field, props } = editCellChangeParams;
            handleEdit(id, field, props.value);
          }}
          components={{
            NoRowsOverlay: () => (
              <></>
              //       <div style={{ width: '100%', textAlign: 'center', padding: '30px' }}>
              //          <div style={{ fontSize: "20px", fontWeight: "bold" }}>You have not created any jobs yet</div>
              //          <Button
              //   variant="contained"
              //   color="primary"
              //   style={{ marginBottom: '16px', fontSize: '12px' }}
              //   onClick={handleAdd}
              // >

              //   <Typography style={{ fontSize: '12px', fontWeight: 'normal', textTransform: 'none' }}>
              //     + Create Job
              //   </Typography>
              // </Button>
              //         <div style={{ fontSize: '14px' }}>A Job represents a new job opening, an open position or vacancy listing. Creating a job will allow you to start adding candidates to that job, publish the job onto your career page, post the job to job boards and much more.</div>
              //       </div>
            ),
          }}
        />
        <Modal
          open={open}
          onClose={handleClose} // Uncommented onClose prop
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '40%',
            height: '40%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto'
          }}>
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
           
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '50px' }}>
         
              <Card
              
                sx={{
                  width: '50%',
                  // display: 'flex',
                  cursor: 'pointer',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                  transition: 'background-color 0.3s',
                  backgroundColor: hovered ? '#e0e0e0' : 'initial',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleOpenForm}
                
              >
                  <Box>anu</Box>
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>Use Template</Typography>
              </Card>
              <Card
                sx={{
                  width: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                  ml: '20px',
                  transition: 'background-color 0.3s',
                  backgroundColor: hoveredTemplate ? '#e0e0e0' : 'initial',
                }}
               
                onMouseEnter={handleMouseEnterTemplate}
                onMouseLeave={handleMouseLeaveTemplate}
                onClick={handleOpenTemplateForm}
                
              >
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>Complete a Form</Typography>
              </Card>
            </Box>
          </Box>
        </Modal>
        <Modal
          open={openForm}
          onClose={handleCloseForm} // Uncommented onClose prop
          aria-labelledby="modal-form-title"
          aria-describedby="modal-form-description"
        >
          <Box sx={{
            position: 'absolute',
            ...modalStyle,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto'
          }}>
            <Typography id="modal-form-title" variant="h6" component="h2">
              Complete Form
            </Typography>
            <IconButton aria-label="close" onClick={handleCloseForm} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
            <form onSubmit={handleSubmitForm}>

              <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
            </form>
          </Box>
        </Modal>
        <Modal
          open={openTemplateForm}
          onClose={handleCloseTemplateForm} // Uncommented onClose prop
          aria-labelledby="modal-template-form-title"
          aria-describedby="modal-template-form-description"
        >
         
            <Dialog open={openTemplateForm} sx={{ '& .MuiPaper-root.MuiPaper-elevation24.MuiPaper-rounded.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm': { width: '100%' } }}
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
                    <IconButton aria-label="close" onClick={handleCloseTemplateForm}>
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
                <Box sx={{ display: "flex", marginTop: "20px" }}>
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
                        sx={{ marginTop: "15px" }}
                      />
                      <TextField
                        label="Add Location"
                        fullWidth
                        sx={{ marginTop: "15px" }}
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
                  <Button sx={{ marginRight: "12px" }} variant="outlined" onClick={handleCloseTemplateForm}>Cancel</Button>
                  <Button variant="contained" onClick={handleSave}>Continue</Button>
                </Box>

              </DialogActions>
            </Dialog>
         
        </Modal>
      </div>
    </>
  );
}
