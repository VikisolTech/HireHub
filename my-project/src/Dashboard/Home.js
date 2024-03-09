import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Layout from './Layout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Avatar from '@mui/joy/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import BasicPie from './PieCharts';
import BasicBars from './LineCharts';
import { IconButton, Tooltip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import TextField from '@mui/material/TextField';
import BasicDatePicker from './StartDate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WorkIcon from '@mui/icons-material/Work';
import { Autocomplete, IconButton as MuiIconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
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
export default function Home() {
  const [open, setOpen] = useState(false);
  const [openactivity, setOpenactivity] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [age, setAge] = React.useState('');
  const [assignees, setAssignees] = useState([]);
  const [attendees, setAttendees] = useState([]);


  const handleAttendeeChange = (event, newValue) => {
    setAttendees(newValue);
  };

  const handleAssigneeChange = (event, newValue) => {
    setAssignees(newValue);
  };

  const handleDeleteAssignee = (assigneeToDelete) => {
    setAssignees(assignees.filter(assignee => assignee !== assigneeToDelete));
  };

  const handleChanges = (event) => {
    setAge(event.target.value);
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const [meetingType, setMeetingType] = useState('');
  const [url, setUrl] = useState('');

  const handleMeetingTypeChange = (event) => {
    setMeetingType(event.target.value);
    // Reset the URL field when the meeting type changes
    setUrl('');
  };


  const [formData, setFormData] = useState({
    photo: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickActivityOpen = () => {
    setOpenactivity(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
  const handleActivityClose = () => {
    setOpenactivity(false);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
    // Reset form data
    setFormData({
      photo: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: ''
    });
    setOpen(false);
  };

  const handleActivitySubmit = () => {
    // Handle form submission here
    console.log(formData);
    // Reset form data
    setFormData({
      photo: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: ''
    });
    setOpen(false);
  };

  const [relatedTo, setRelatedTo] = useState('');
  const [contact, setContact] = useState('');

  const handleRelatedToChange = (event) => {
    setRelatedTo(event.target.value);
    // Reset the contact field when the related to option changes
    setContact('');
  };



  const [candidatesData, setCandidatesData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setCandidatesData(data);
      })
      .catch(error => {
        console.error('Error fetching candidates data:', error);
      });
  }, []);

  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchDummyJobs = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setJobsData(data);
      } catch (error) {
        console.error('Error fetching dummy jobs:', error);
      }
    };

    fetchDummyJobs();
  }, []);












  return (
    <>
      <Layout />
      <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: '-45px' }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: 'black' }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, marginTop: "25px", padding: "20px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginTop: "20px" }}>NOTIFICATIONS</Typography>
              <Box sx={{ color: 'black', textAlign: 'center', paddingTop: "15px" }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>You don't have any notifications.</Typography>
                <Typography sx={{ color: "#a6a194", fontSize: '14px', mt: "5px" }}>Our alert system will let you know immediately</Typography>
                <Typography sx={{ color: "#a6a194", fontSize: '14px' }}>once you receive a notification.</Typography>
                <Typography sx={{ color: "#a6a194", fontSize: '14px' }}>
                  Just keep an eye on the
                  <NotificationsIcon sx={{ color: '#007bff', fontSize: '18px', verticalAlign: 'middle', marginLeft: '5px' }} />
                  icon at the top of your screen.
                </Typography>

                <Typography sx={{ color: "#a6a194", fontSize: '14px' }}>
                  Need any help? Contact us using
                  <MessageIcon sx={{ color: '#007bff', fontSize: '18px', verticalAlign: 'middle', marginLeft: '5px' }} />
                  icon under the
                </Typography>

                <Typography sx={{ color: "#a6a194", fontSize: '14px', marginBottom: "20px" }}>
                  <HelpIcon sx={{ color: '#007bff', fontSize: '18px', verticalAlign: 'middle' }} />
                  Need any help? Contact us using chat icon at the top of your screen.
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginTop: "20px" }}>TOP PERFORMERS</Typography>

              <Box sx={{ color: 'black', textAlign: 'center', paddingTop: "15px" }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>There are no other users created yet.</Typography>
                <Typography sx={{ color: "#a6a194", fontSize: '14px', mt: "5px" }}>Here you will find the ranking of your team's performance</Typography>
                <Typography sx={{ color: "#a6a194", fontSize: '14px' }}>based on placements, candidates and jobs.</Typography>
                <Typography sx={{ color: "#a6a194", fontSize: '14px' }}> Start creating users and build your team. </Typography>

                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    marginBottom: '16px',
                    marginTop: '18px',
                    borderRadius: '10px',
                    padding: '8px 16px',
                  }}
                  onClick={handleClickOpen}
                >
                  <AddIcon
                    style={{
                      marginRight: '8px',
                      border: '2px solid #1976d2',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                  <Typography style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'none' }}>Create User</Typography>
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Create User</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="photo"
                      name="photo"
                      label="Photo"
                      type="text"
                      fullWidth
                      value={formData.photo}
                      onChange={handleChange}
                    />
                    <TextField
                      margin="dense"
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      type="text"
                      fullWidth
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <TextField
                      margin="dense"
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <TextField
                      margin="dense"
                      id="mobileNumber"
                      name="mobileNumber"
                      label="Mobile Number"
                      type="text"
                      fullWidth
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                    <TextField
                      margin="dense"
                      id="email"
                      name="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleSubmit} color="primary">Create</Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "5px" }}>
            <Item>
              <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', }}>RECENT ACTIONS</Typography>
              <Box sx={{ color: 'black', marginTop: "15px" }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>CANDIDATES</Typography>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px", cursor: "pointer" }}>
                  {candidatesData.map((candidate, index) => (
                    <Box key={index} style={{ height: "100px", width: "calc(20% - 10px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                      <Typography><Avatar alt={candidate.name} src={candidate.avatarUrl} /></Typography>
                      <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>{candidate.name}</Typography>
                    </Box>
                  ))}
                </div>

              </Box>
              <Box sx={{ color: 'black', marginTop: "15px" }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>JOBS</Typography>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px", cursor: "pointer" }}>
                  {jobsData.map((job, index) => (
                    <Box key={index} style={{ height: "100px", width: "calc(20% - 10px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                      <Typography><Avatar alt={job.title} src={`https://i.pravatar.cc/150?u=${job.id}`} /></Typography>
                      <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>{job.name}</Typography>
                    </Box>
                  ))}
                </div>
              </Box>




            </Item>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "5px" }}>
            <Item>
              <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', }}>MY PERFORMANCE</Typography>
              <Box sx={{ color: 'black', marginTop: "15px" }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>MY CANDIDATES</Typography>

                <Box sx={{ color: 'black', textAlign: 'center', paddingTop: '15px' }}>
                  <BasicBars />
                </Box>

                <Box sx={{ color: 'black', marginTop: "15px" }}>
                  <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}> My JOBS</Typography>
                  <Box sx={{ color: 'black', textAlign: 'center', paddingTop: '15px' }}>
                    <BasicPie />
                  </Box>
                </Box>


              </Box>






            </Item>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "5px", position: 'relative', bottom: '165px' }}>
            <Item>
              <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginTop: "20px" }}>MY ACTIVITIES </Typography>

              <Box sx={{ color: 'black', textAlign: 'center', paddingTop: "15px" }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>You don't have any activities planned yet.</Typography>
                <Typography sx={{ color: "#a6a194", fontSize: '14px', mt: "5px" }}>Start planning your week by adding and managing your activities.</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    marginBottom: '16px',
                    marginTop: '18px',
                    borderRadius: '10px',
                    padding: '8px 16px',
                  }}
                  onClick={handleClickActivityOpen}
                >
                  <AddIcon
                    style={{
                      marginRight: '8px',
                      border: '2px solid #1976d2',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                  <Typography style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'none' }}>Create User</Typography>
                </Button>
                <Box sx={{ width: "100%", height: "auto" }}>
                  <Dialog
                    open={openactivity}

                    aria-labelledby="form-dialog-title"
                    maxWidth="sm" // Set the maximum width of the Dialog
                    fullWidth // Make the Dialog take up the full width of its container
                  >
                    <Box sx={{ padding: "30px", marginLeft: "10px" }}>
                      <Box display={{ display: "flex", justifyContent: "space-between" }}>
                        <DialogTitle
                          id="form-dialog-title"
                          sx={{ textAlign: "center", fontSize: '18px', fontWeight: 'bold', color: 'black' }}
                        >
                          Create Activity

                        </DialogTitle>
                        <Typography sx={{ textAlign: "center", fontSize: '18px', fontWeight: 'bold', color: 'black', marginTop: "15px", marginRight: "10px" }}>
                          <IconButton aria-label="close" onClick={handleActivityClose}>
                            <CloseIcon />
                          </IconButton>

                        </Typography>
                      </Box>

                      <TextField
                        id="standard-basic"
                        label="Add Title"
                        variant="standard"
                        sx={{ width: '100%' }} // Set the width of the TextField to 100%
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
                              sx={{ marginTop: "10px" }}
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
                        <InputLabel id="demo-simple-select-standard-label" sx={{ marginRight: "30px", fontWeight: "bold", overflow: 'unset', color: "black" }}>Online meeting:</InputLabel>

                        <FormControl variant="standard" sx={{ width: "180px" }}>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={meetingType}
                            onChange={handleMeetingTypeChange}
                            label="Related To"
                            sx={{ marginTop: "10px" }}
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









                      <DialogActions>
                        <Button onClick={handleActivityClose} color="primary">Cancel</Button>
                        <Button onClick={handleActivitySubmit} color="primary">Create</Button>
                      </DialogActions>
                    </Box>
                  </Dialog>
                </Box>


              </Box>
            </Item>
          </Grid>


        </Grid>
      </Box>
    </>
  );
}
