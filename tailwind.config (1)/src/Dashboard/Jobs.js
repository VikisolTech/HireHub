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
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';


// Import missing Material-UI components
import { InputLabel, Select, MenuItem, FormControlLabel, Checkbox, OutlinedInput } from '@mui/material';
import Description from './Description';
import ClientDescription from './ClientDescription';

export default function Jobs() {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(true);
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredTemplate, setHoveredTemplate] = useState(false);
  const [openTemplateForm, setOpenTemplateForm] = useState(false);
  const [description, setDescription] = useState('');
  const [modalStyle, setModalStyle] = useState({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  const [personName, setPersonName] = useState([]); // Define state for selected names
  const [names, setNames] = useState([]); // Define state for list of names
  const [MenuProps, setMenuProps] = useState({}); // Define state for menu props


  // Define the handler function to update description state
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleToggleOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

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
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -20%)',
    });
  };

  const handleCloseTemplateForm = () => {
    setOpenTemplateForm(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Your form submission logic
  };

  const handleSubmitTemplateForm = (event) => {
    event.preventDefault();
    // Your template form submission logic
  };

  function getStyles() {
    // Your implementation here
  }

  // Define theme object
  const theme = {
    // Your theme properties here
  };

  // Now you can use getStyles and theme in your code
  // For example:
  const styles = getStyles();
  console.log(theme.color);
  const [rows, setRows] = useState([]);

  const [newRow, setNewRow] = useState({
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

  const handleSaves = () => {
    // Implementation of handleSaves
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
          // onClose={handleClose} 
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
            maxWidth: '120%',
            maxHeight: '120%',
            overflow: 'auto'
          }}>
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '50px' }}>

              <Card

                sx={{
                  width: '50%',
                  cursor: 'pointer',
                  height: '180px',
                  transition: 'background-color 0.3s',
                  backgroundColor: hovered ? '#e0e0e0' : 'initial',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleOpenForm}

              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: "20px" }}>
                  <img src="https://cdn3.iconfinder.com/data/icons/file-folders/64/1-20-512.png" width={"100px"} />
                  <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold', paddingTop: "10px" }}> Use Template</Typography>
                </Box>

              </Card>
              <Card
                sx={{
                  width: '50%',
                  cursor: 'pointer',
                  height: '180px',
                  ml: '20px',
                  transition: 'background-color 0.3s',
                  backgroundColor: hoveredTemplate ? '#e0e0e0' : 'initial',
                }}

                onMouseEnter={handleMouseEnterTemplate}
                onMouseLeave={handleMouseLeaveTemplate}
                onClick={handleOpenTemplateForm}

              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: "20px" }}>
                  <img src="https://cdn3.iconfinder.com/data/icons/file-folders/64/1-50-1024.png" width={"100px"} />
                  <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold', paddingTop: "10px" }}> Complete a Form</Typography>
                </Box>



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
            <Box sx={{ paddingTop: "10px" }}>
              <Box display={{ display: "flex", justifyContent: "space-between" }}>
                <DialogTitle
                  id="form-dialog-title"
                  sx={{ textAlign: "center", fontSize: '18px', fontWeight: 'bold', color: 'black' }}
                >
                  Create Client

                </DialogTitle>
                <Typography sx={{ textAlign: "center", fontSize: '18px', fontWeight: 'bold', color: 'black', marginTop: "15px", marginRight: "10px" }}>
                  <IconButton aria-label="close" onClick={handleCloseForm}>
                    <CloseIcon />
                  </IconButton>

                </Typography>
              </Box>
            </Box>
            <Box sx={{ paddingLeft: "50px", paddingRight: "50px", marginTop: "15px" }}>
              <Box sx={{ backgroundColor: "#f1f4f8" }}>
                <Typography sx={{ color: "#767676", fontSize: '14px', height: "90px", padding: "20px" }}>
                  Select a job template from the dropdown menu below. Learn more about job templates in
                  <Link
                    href="#"
                    sx={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer', '&:hover': { color: 'darkblue' } }}
                  >
                    our documentation
                  </Link>
                  or create a new job template
                  <Link
                    href="#"
                    sx={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer', '&:hover': { color: 'darkblue' } }}
                  >
                    here.
                  </Link>
                </Typography>
              </Box>

            </Box>
            <FormControl sx={{
              width: "80%",
              marginTop: "25px",
              marginLeft: "76px",marginBottom: "20px"
            }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Select template
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: ' Select template',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>  Sample - Software Engineer</option>
                <option value={20}>Sample - Sales Manager</option>
                <option value={30}>Sample - Digital Marketing Manager</option>
              </NativeSelect>
            </FormControl>
            <form onSubmit={handleSubmitForm}>
              <DialogActions sx={{ marginBottom: "10px", padding: "25px", display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>

                <Box>
                  <Button sx={{ marginRight: "12px" }} variant="outlined" onClick={handleCloseForm}>Cancel</Button>
                  <Button variant="contained" onClick={handleSaves}>Continue</Button>
                </Box>
              </DialogActions>
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

                <TextField
                  autoFocus
                  margin="dense"
                  name="PositionName"
                  label="Position Name"
                  type="text"
                  value={newRow.ClientName}
                  onChange={handleChange}
                  fullWidth

                />
              </Box>
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Client</InputLabel>
                  <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select Client" />}
                    MenuProps={MenuProps}
                    style={{ width: '100%' }} // Apply styles to make the Select component full width
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>


              <Box >
                {showAdvancedOptions && (
                  <>
                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-multiple-name-label">Job Pipeline</InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Job Pipeline" />}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>

                      </FormControl>

                    </Box>


                    <Box sx={{ display: "flex", marginTop: "20px" }}>

                      <TextField
                        autoFocus
                        margin="dense"
                        name="Add location"
                        label="Add Location"
                        type="text"
                        value={newRow.ClientName}
                        onChange={handleChange}
                        fullWidth

                      />
                      <Box sx={{ marginLeft: "10px" }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remote" />
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", marginTop: "20px" }}>

                      <TextField
                        autoFocus
                        margin="dense"
                        name="HeadCount"
                        label="Head count"
                        type="text"
                        value={newRow.ClientName}
                        onChange={handleChange}
                        fullWidth

                      />
                    </Box>

                    <Box sx={{ display: "flex", marginTop: "20px" }}>

                      <TextField
                        autoFocus
                        margin="dense"
                        name="ContactDeatials"
                        label="Contanct Deatails"
                        type="text"
                        value={newRow.ClientName}
                        onChange={handleChange}
                        fullWidth

                      />
                    </Box>


                    <Box sx={{ display: "flex", marginTop: "20px" }}>

                      <TextField
                        autoFocus
                        margin="dense"
                        name="Add Minium salary"
                        label="Add Minium salary"
                        type="text"
                        value={newRow.ClientName}
                        onChange={handleChange}
                        fullWidth

                      />
                      <Box>-</Box>
                      <Box sx={{ marginLeft: "10px" }}>
                        <TextField
                          autoFocus
                          margin="dense"
                          name="Add Maxim salary"
                          label="Add Maxim salary"
                          type="text"
                          value={newRow.ClientName}
                          onChange={handleChange}
                          fullWidth

                        />


                      </Box>


                    </Box>



                    <Box sx={{ display: "flex", marginTop: "20px" }}>

                      <TextField
                        autoFocus
                        margin="dense"
                        name="Currency"
                        label="Currency"
                        type="text"
                        value={newRow.ClientName}
                        onChange={handleChange}
                        width={"60%"}

                      />
                      <FormControl sx={{ width: "50%", marginLeft: "30px", marginTop: "8px" }}>
                        <InputLabel id="demo-multiple-name-label">Select Frequency</InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Select Frequency" />}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                    </Box>

                    <Box>
                      <ClientDescription description={description} handleDescriptionChange={handleDescriptionChange} />
                    </Box>

                  </>
                )}

              </Box>



























            </DialogContent>


            <DialogActions sx={{ marginBottom: "10px", padding: "25px", display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>

              <Box>
                <Button sx={{ marginRight: "12px" }} variant="outlined" onClick={handleCloseTemplateForm}>Cancel</Button>
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

        </Modal>
      </div>
    </>
  );
}
