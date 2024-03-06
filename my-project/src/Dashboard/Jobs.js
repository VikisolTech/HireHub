import * as React from 'react';
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

export default function Jobs() {
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [hoveredTemplate, setHoveredTemplate] = React.useState(false);
  const [openTemplateForm, setOpenTemplateForm] = React.useState(false);
  const [modalStyle, setModalStyle] = React.useState({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  const handleMouseEnter = () => {
    setHovered(true);
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
                  display: 'flex',
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
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>Complete a Form</Typography>
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
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>Use Template</Typography>
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
              <TextField name="positionName" id="positionName" label="Position Name" variant="outlined" fullWidth margin="normal" />
              {/* Add other form fields here similarly */}
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
            <Typography id="modal-template-form-title" variant="h6" component="h2">
              Use Template
            </Typography>
            <IconButton aria-label="close" onClick={handleCloseTemplateForm} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
            <form onSubmit={handleSubmitForm}>
            <TextField name="positionName" id="positionName" label="Position Name" variant="outlined" fullWidth margin="normal" />
              {/* Add other form fields here similarly */}
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}
