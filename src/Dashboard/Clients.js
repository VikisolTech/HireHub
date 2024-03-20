import React, { useState } from 'react';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import ClientNavBar from './ClientNavbar';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import { FormatListBulleted, Dashboard } from '@mui/icons-material';
import PrivateDropdown from './PrivateDropDown';
import { Link } from '@mui/material';
import ImageUpload from './ImageUpload';
import ClentDescription from './ClientDescription';



export default function Clients() {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(true); // Change to true

  const handleToggleOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  const [description, setDescription] = useState('');

  // Define the handler function to update description state
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const [rows, setRows] = React.useState([
    { id: 1, ClientName: 'ABC Inc.', jobCount: 5, ClientIndustry: 'Technology', ClientLocation: 'New York', ClientStage: 'Active', ClientOwner: 'John Doe', ClientTeam: 'Sales', ClientCreatedDate: '2023-01-15' },
    { id: 2, ClientName: 'XYZ Corp.', jobCount: 3, ClientIndustry: 'Finance', ClientLocation: 'San Francisco', ClientStage: 'Active', ClientOwner: 'Jane Smith', ClientTeam: 'Finance', ClientCreatedDate: '2023-02-20' },
    { id: 3, ClientName: '123 Industries', jobCount: 2, ClientIndustry: 'Manufacturing', ClientLocation: 'Los Angeles', ClientStage: 'Inactive', ClientOwner: 'Alex Johnson', ClientTeam: 'Operations', ClientCreatedDate: '2023-03-10' },
    { id: 4, ClientName: '456 Corp.', jobCount: 4, ClientIndustry: 'Healthcare', ClientLocation: 'Houston', ClientStage: 'Active', ClientOwner: 'Emily Brown', ClientTeam: 'HR', ClientCreatedDate: '2023-04-05' },
    { id: 5, ClientName: '789 Corp.', jobCount: 3, ClientIndustry: 'Retail', ClientLocation: 'Chicago', ClientStage: 'Active', ClientOwner: 'Michael Johnson', ClientTeam: 'Sales', ClientCreatedDate: '2023-05-20' },
    { id: 6, ClientName: 'ABC Corp.', jobCount: 6, ClientIndustry: 'Technology', ClientLocation: 'Seattle', ClientStage: 'Active', ClientOwner: 'Sarah Clark', ClientTeam: 'Engineering', ClientCreatedDate: '2023-06-15' },
    { id: 7, ClientName: 'XYZ Ltd.', jobCount: 2, ClientIndustry: 'Consulting', ClientLocation: 'Boston', ClientStage: 'Active', ClientOwner: 'David Wilson', ClientTeam: 'Consulting', ClientCreatedDate: '2023-07-10' },
    { id: 8, ClientName: '123 Corp.', jobCount: 3, ClientIndustry: 'Finance', ClientLocation: 'New York', ClientStage: 'Active', ClientOwner: 'Emma Taylor', ClientTeam: 'Finance', ClientCreatedDate: '2023-08-05' },
    { id: 9, ClientName: '456 Ltd.', jobCount: 5, ClientIndustry: 'Technology', ClientLocation: 'San Francisco', ClientStage: 'Inactive', ClientOwner: 'James Lee', ClientTeam: 'Engineering', ClientCreatedDate: '2023-09-20' },
    { id: 10, ClientName: '789 Industries', jobCount: 2, ClientIndustry: 'Retail', ClientLocation: 'Los Angeles', ClientStage: 'Active', ClientOwner: 'Olivia Martinez', ClientTeam: 'Sales', ClientCreatedDate: '2023-10-15' },
]);

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
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'ClientName', headerName: 'Client Name', width: 200, editable: true },
    { field: 'jobCount', headerName: 'Job Count', width: 200, editable: true },
    { field: 'ClientIndustry', headerName: 'Client Industry', width: 200, editable: true },
    { field: 'ClientLocation', headerName: 'Client Location', width: 200, editable: true },
    { field: 'ClientStage', headerName: 'Client Stage', width: 200, editable: true },
    { field: 'ClientOwner', headerName: 'Client Owner', width: 200, editable: true },
    { field: 'ClientTeam', headerName: 'Client Team', width: 200, editable: true },
    { field: 'ClientCreatedDate', headerName: 'Client Created Date', width: 180, editable: true },
  ];

  return (
    <>
      <Layout />
      <ClientNavBar />
      <div style={{ height: 400, width: '100%', paddingLeft: '30px', paddingRight: '30px', marginTop: "30px" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: '16px', fontSize: "12px" }}
          onClick={handleAdd}
        >
          <AddIcon style={{ marginRight: '8px', width: "20px", height: "20px" }} />
          <Typography style={{ fontSize: '12px', fontWeight: 'normal', textTransform: 'none', }}>
            Create Clients
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
              <div style={{ width: '100%', textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}> No clients found</div>
                <div style={{ fontSize: "14px" }}> No clients match the selected filters. Please modify the filters to try again.</div>
              </div>
            ),
          }}
        />

        <Dialog open={open} sx={{ '& .MuiPaper-root.MuiPaper-elevation24.MuiPaper-rounded.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm': { width: '100%' } }}
        >
          <Box sx={{ paddingTop: "20px" }}>
            <Box display={{ display: "flex", justifyContent: "space-between" }}>
              <DialogTitle
                id="form-dialog-title"
                sx={{ textAlign: "center", fontSize: '18px', fontWeight: 'bold', color: 'black' }}
              >
                Create Activity

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


          <DialogActions sx={{ marginBottom: "10px", padding: "25px", display: "flex", justifyContent: "space-between",flexDirection: "row-reverse" }}>
          <Box>
              <Button sx={{ marginRight: "12px" }} variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleSave}>Continue</Button>
            </Box>
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
          

          </DialogActions>
        </Dialog>



      </div>
    </>
  );
}
