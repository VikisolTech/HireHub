import React, { useEffect, useState } from 'react';
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
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BasicDatePicker from './StartDate';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import WorkIcon from '@mui/icons-material/Work';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Autocomplete, IconButton as MuiIconButton } from '@mui/material'
import Description from './Description';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FileUpload from './FileUpload';

export default function Activities() {
  const [rows, setRows] = React.useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedImportance, setSelectedImportance] = useState('');
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };
  const [newRow, setNewRow] = React.useState({
    id: '',
    Title: '',
    Type: '',
    RelatedTo: '',
    Date: '',
    Time: '',
    Duration: '',
    Assignees: '',
    Attendees: '',
    Creator: '',
    CreatedDate: ''
  });

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAssigneeChange = (event, newValue) => {
    setAssignees(newValue);
  };
  const handleSave = () => {
    setRows([...rows, { ...newRow }]);
    setNewRow({
      id: '',
      Title: '',
      Type: '',
      RelatedTo: '',
      Date: '',
      Time: '',
      Duration: '',
      Assignees: '',
      Attendees: '',
      Creator: '',
      CreatedDate: ''
    });
    setOpen(false);
  };

  const assigneeOptions = [
    { label: 'None' },
    { label: 'Assignee 1' },
    { label: 'Assignee 2' },
    { label: 'Assignee 3' },
  ];

  const attendeeOptions = [
    { label: 'Attendee 1' },
    { label: 'Attendee 2' },
    { label: 'Attendee 3' },
  ];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const [relatedTo, setRelatedTo] = useState('');
  const [contact, setContact] = useState('');

  const handleRelatedToChange = (event) => {
    setRelatedTo(event.target.value);
    // Reset the contact field when the related to option changes
    setContact('');
  };
  const [assignees, setAssignees] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const handleDeleteAssignee = (assigneeToDelete) => {
    setAssignees(assignees.filter(assignee => assignee !== assigneeToDelete));
  };

  const handleAttendeeChange = (event, newValue) => {
    setAttendees(newValue);
  };
  const [meetingType, setMeetingType] = useState('');
  const [url, setUrl] = useState('');

  const handleMeetingTypeChange = (event) => {
    setMeetingType(event.target.value);
    // Reset the URL field when the meeting type changes
    setUrl('');
  };

  const handleImportanceChange = (event) => {
    setSelectedImportance(event.target.value);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Title', headerName: 'Title', width: 150, editable: true },
    { field: 'Type', headerName: 'Type', width: 150, editable: true },
    { field: 'RelatedTo', headerName: 'Related To', width: 150, editable: true },
    { field: 'Date', headerName: 'Date', width: 150, editable: true },
    { field: 'Time', headerName: 'Time', width: 150, editable: true },
    { field: 'Duration', headerName: 'Duration', width: 150, editable: true },
    { field: 'Assignees', headerName: 'Assignees', width: 150, editable: true },
    { field: 'Attendees', headerName: 'Attendees', width: 150, editable: true },
    { field: 'Creator', headerName: 'Creator', width: 150, editable: true },
    { field: 'CreatedDate', headerName: 'Created Date', width: 180, editable: true },
  ];

  return (
    <>
      <Layout />
      <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: "-45px" }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: "black" }}>
            Activities
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ height: 400, width: '100%', paddingLeft: '30px', paddingRight: '30px', marginTop: "30px" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: '16px', fontSize: "12px" }}
          onClick={handleAdd}
        >
          <Typography style={{ fontSize: '12px', fontWeight: 'normal', textTransform: 'none', }}>
            + Create Activity
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
          maxWidth="sm"
          fullWidth
          style={{ border: '1px solid #ccc', borderRadius: '5px' }}
          headerStyle={{ padding: '8px' }}
        />
        <Dialog open={open}>
          <Box sx={{ padding: "20px", marginLeft: "10px" }}>
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

            <TextField
              id="standard-basic"
              label="Add Title"
              variant="standard"
              sx={{ width: '100%' }}
            />
            <Box sx={{ display: 'flex', gap: 2, marginTop: "15px" }}>
              <Tooltip title="Call">
                <IconButton
                  onClick={() => handleButtonClick('Call')}
                  sx={{ color: activeButton === 'Call' ? '#1976d2' : 'inherit' }}
                >
                  <CallIcon />
                  <Typography sx={{ fontSize: "14px" }}>CALL</Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title="Meeting">
                <IconButton
                  onClick={() => handleButtonClick('Meeting')}
                  sx={{ color: activeButton === 'Meeting' ? '#1976d2' : 'inherit' }}
                >
                  <VideocamIcon />
                  <Typography sx={{ fontSize: "14px" }}>MEETING</Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title="Task">
                <IconButton
                  onClick={() => handleButtonClick('Task')}
                  sx={{ color: activeButton === 'Task' ? '#1976d2' : 'inherit' }}
                >
                  <AssignmentIcon />
                  <Typography sx={{ fontSize: "14px" }}>TASK</Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton
                  onClick={() => handleButtonClick('Email')}
                  sx={{ color: activeButton === 'Email' ? '#1976d2' : 'inherit' }}
                >
                  <EmailIcon />
                  <Typography sx={{ fontSize: "14px" }}>EMAIL</Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title="Interview">
                <IconButton
                  onClick={() => handleButtonClick('Interview')}
                  sx={{ color: activeButton === 'Interview' ? '#1976d2' : 'inherit' }}
                >
                  <CalendarTodayIcon />
                  <Typography sx={{ fontSize: "14px" }}>INTERVIEW</Typography>
                </IconButton>
              </Tooltip>
            </Box>

            <Box>

              <Typography>
                <BasicDatePicker />
              </Typography>
            </Box>

            <Box sx={{ marginTop: "15px" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Share with guests"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '15px',
                  },
                }}
              />
            </Box>

            <Box sx={{ marginTop: "15px", display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <LocationOnIcon color="primary" />
                <InputLabel id="demo-simple-select-standard-label" sx={{ marginRight: "50px", fontWeight: "bold", overflow: 'unset', color: "black", marginLeft: "10px" }}>Location: </InputLabel>

                <TextField
                  id="location"
                  label="Location"
                  variant="standard"
                  fullWidth
                />
              </div>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkIcon color="primary" sx={{ marginRight: 1 }} />
                <InputLabel id="demo-simple-select-standard-label" sx={{ marginRight: "30px", fontWeight: "bold", overflow: 'unset', color: "black", marginLeft: "5px" }}>Related To:</InputLabel>

                <FormControl variant="standard" sx={{ width: "180px" }}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={relatedTo}
                    onChange={handleRelatedToChange}
                    label="Related To"
                    sx={{ marginTop: "16px" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="job">Job Client</MenuItem>
                    <MenuItem value="candidate">Candidate</MenuItem>
                    <MenuItem value="match">Match</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>

                {relatedTo === 'candidate' && (
                  <TextField
                    sx={{ width: "210px", marginLeft: "10px" }}
                    id="assignees"
                    label="Select a Contact"
                    variant="standard"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    fullWidth
                  />
                )}
                {relatedTo === 'job' && (
                  <TextField
                    sx={{ width: "210px", marginLeft: "10px" }}
                    id="assignees"
                    label="Select a job"
                    variant="standard"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    fullWidth
                  />
                )}
                {relatedTo === 'match' && (
                  <TextField
                    sx={{ width: "210px", marginLeft: "10px" }}
                    id="assignees"
                    label="Select a match"
                    variant="standard"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    fullWidth
                  />
                )}
              </Box>


              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <PersonIcon color="primary" />
                <InputLabel id="demo-simple-select-standard-label" sx={{ marginRight: "40px", marginTop: "10px", fontWeight: "bold", overflow: 'unset', color: "black", marginLeft: "10px" }}>Assignees:</InputLabel>
                <Autocomplete
                  multiple
                  id="assignees"
                  options={assigneeOptions}
                  getOptionLabel={(option) => option.label}
                  value={assignees}
                  onChange={handleAssigneeChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" sx={{ width: "378px", marginTop: "10px", color: "#1976d2" }} />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <div key={index} {...getTagProps({ index })} style={{ display: 'flex', alignItems: 'center', marginRight: '5px' }}>
                        <div>{option.label}</div>
                        <CloseIcon

                          onClick={() => {
                            const newAssignees = [...assignees];
                            newAssignees.splice(index, 1);
                            setAssignees(newAssignees);
                          }}
                          style={{ cursor: 'pointer', width: "18px", height: "18px", color: "#1976d2" }} // Setting cursor to pointer
                        />
                      </div>
                    ))
                  }
                  clearText="Clear"
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <GroupIcon color="primary" />
                <InputLabel id="demo-simple-select-standard-label" sx={{ marginRight: "40px", marginTop: "10px", fontWeight: "bold", overflow: 'unset', color: "black", marginLeft: "10px" }}>Attendees:</InputLabel>
                <Autocomplete
                  multiple
                  id="attendees"
                  options={attendeeOptions}
                  getOptionLabel={(option) => option.label}
                  value={attendees}
                  onChange={handleAttendeeChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" sx={{ width: "378px", marginTop: "10px" }} />

                  )}

                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <div key={index} {...getTagProps({ index })} style={{ display: 'flex', alignItems: 'center', marginRight: '5px' }}>
                        <div>{option.label}</div>
                        <CloseIcon

                          onClick={() => {
                            const newAttendees = [...attendees];
                            newAttendees.splice(index, 1);
                            setAttendees(newAttendees);
                          }}
                          style={{ cursor: 'pointer', width: "18px", height: "18px" }}
                        />
                      </div>
                    ))
                  }
                  clearText="Clear"
                />

              </div>
            </Box>

            <Box sx={{ marginTop: "5px", display: "flex", justifyContent: "center", marginRight: "60px" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Invite a BCC"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '14px',
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <VideocamIcon color="primary" sx={{ marginRight: 1 }} />
              <InputLabel id="demo-simple-select-standard-label" sx={{ marginRight: "25px", fontWeight: "bold", overflow: 'unset', color: "black" }}>Online meeting:</InputLabel>

              <FormControl variant="standard" sx={{ width: "180px" }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={meetingType}
                  onChange={handleMeetingTypeChange}
                  label="Related To"
                  sx={{ marginTop: "16px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Manual url">Manual URL</MenuItem>
                  <MenuItem value="google_meet">Google Meet</MenuItem>
                  <MenuItem value="meet_url">Meet URL</MenuItem>
                </Select>
              </FormControl>

              {meetingType === 'Manual url' && (
                <TextField
                  sx={{ width: "210px", marginLeft: "10px" }}
                  id="assignees"
                  label="Enter Manual URL"
                  variant="standard"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  fullWidth
                />
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
              <PriorityHighIcon color="primary" sx={{ marginRight: 1 }} />
              <InputLabel id="demo-simple-select-standard-label" sx={{ marginRight: "55px", fontWeight: "bold", overflow: 'unset', color: "black" }}>Importance:</InputLabel>

              <FormControl variant="standard" sx={{ width: "180px" }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectedImportance}
                  onChange={handleImportanceChange}
                  label="Select Importance"
                  sx={{ marginTop: "16px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
              <Description description={description} handleDescriptionChange={handleDescriptionChange} />
            </Box>


            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: "100px" }}>
              <AttachFileIcon color="primary" sx={{ marginRight: 1 }} />
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  marginRight: "25px",
                  fontWeight: "bold",
                  overflow: 'unset',
                  color: "black"
                }}
              >
                Attachments:
              </InputLabel>
              <FileUpload />
            </Box>

          </Box>


          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}


