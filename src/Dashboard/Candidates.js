import React, { useState } from 'react';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import ImageUpload from './ImageUpload';
import ClientDescription from './ClientDescription';
import { MuiTelInput } from 'mui-tel-input';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Select from 'react-select';
import FileUpload from './FileUpload';

export default function Candidates() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openMultipleResumesForm, setOpenMultipleResumesForm] = useState(false);
  const [openTemplateForm, setOpenTemplateForm] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalStyle, setModalStyle] = useState({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  const [newRow, setNewRow] = useState({ ClientName: '' });
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [description, setDescription] = useState('');

  //   const handleChange = (event) => {
  //     console.log('Event:', event);
  //     console.log('Event target:', event.target); // Log event target
  //     const { name, value } = event.target;
  //     console.log('Name:', name);
  //     console.log('Value:', value);
  //     setNewRow(prevState => ({
  //       ...prevState,
  //       [name]: value
  //     }));
  // };
  const handleChange = (newPhone) => {
    formik.setFieldValue('phoneNumber', newPhone);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Company Email is required'),
    emailCompany: yup.string().email('Invalid email address').required('Confirm Company Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    companyName: yup.string().required('Company name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    organizationName: yup.string().required('Organization name is required'),
    privacyPolicy: yup.boolean().oneOf([true], 'You must agree to the privacy policy and terms and conditions').required(),
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      emailCompany: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      phoneNumber: '',
      organizationName: '',
      privacyPolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {

      console.log('Form data:', values);
      console.log('Data type:', typeof values);
    },
  })

  const handleSave = () => {
    // setRows([...rows, { id: rows.length + 1, ...newRow }]);
    setNewRow({ jobCount: '', ClientName: '', age: '' });
    setOpen(false);
  };


  const handleToggleOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };


  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
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

  const handleOpenMultipleResumesForm = () => {
    setOpenMultipleResumesForm(true);
    setModalStyle({
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    });
  };

  const handleCloseMultipleResumesForm = () => {
    setOpenMultipleResumesForm(false);
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
    // Handle form submission logic here
    handleCloseForm(); // Close modal after successful submission
  };

  const handleSubmitMultipleResumesForm = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleCloseMultipleResumesForm(); // Close modal after successful submission
  };

  const handleSubmitTemplateForm = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleCloseTemplateForm(); // Close modal after successful submission
  };

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'kiwi', label: 'Kiwi' }
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChanges = (selected) => {
    setSelectedOptions(selected);
  };

  const [selectedFolder, setSelectedFolder] = useState(null);

  const folderOptions = [
    { value: 'folder1', label: 'Folder 1' },
    { value: 'folder2', label: 'Folder 2' },
    { value: 'folder3', label: 'Folder 3' },
    // Add more folder options as needed
  ];

  const handleFolderChange = (selectedOption) => {
    setSelectedFolder(selectedOption);
  };





  return (
    <>
      <Layout />
      <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: "-45px" }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: "black" }}>
            Candidates
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button variant="contained" onClick={handleOpen} sx={{ textTransform: 'none' }}>+ Create Job</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: "50%",
          height: "70%",
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
          <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
            <Card
              sx={{
                width: "50%",
                display: "flex",
                cursor: 'pointer',
                alignItems: "center",
                justifyContent: "center",
                height: "170px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "form" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("form")}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenForm}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: "20px" }}>
                <img src="https://cdn3.iconfinder.com/data/icons/file-folders/64/1-50-1024.png" width={"100px"} />
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold', paddingTop: "10px", paddingBottom: "10px" }}> Complete a Form</Typography>
              </Box>
            </Card>

            <Card
              sx={{
                width: "50%",
                cursor: 'pointer',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "170px",
                ml: "20px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "template" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("template")}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenTemplateForm}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: "20px" }}>
                <img src="https://www.pngkey.com/png/detail/511-5115473_large-size-of-resume-icon-png-download-free.png" width={"70px"} />
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold', paddingTop: "10px", paddingBottom: "10px" }}> Upload Resume</Typography>
              </Box>
            </Card>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
            <Card
              sx={{
                width: "50%",
                display: "flex",
                cursor: 'pointer',
                alignItems: "center",
                justifyContent: "center",
                height: "170px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "resumes" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("resumes")}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenMultipleResumesForm}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: "20px" }}>
                <img src="https://icon-library.com/images/resume-icon/resume-icon-16.jpg" width={"100px"} />
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold', paddingTop: "10px", paddingBottom: "10px" }}> Upload Multiple Resumes</Typography>
              </Box>

            </Card>

            <Card
              sx={{
                width: "50%",
                cursor: 'pointer',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "170px",
                ml: "20px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "import" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("import")}
              onMouseLeave={handleMouseLeave}
              // onClick={handleOpenTemplateForm}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: "20px" }}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-json-file-1-504451.png?f=webp" width={"100px"} />
                <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: 'bold', paddingTop: "10px", paddingBottom: "10px" }}> Import a JSON or CSV file</Typography>
              </Box>

            </Card>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openForm}
        // onClose={handleCloseForm}
        aria-labelledby="modal-form-title"
        aria-describedby="modal-form-description"
      >
        <Box sx={{
          position: 'absolute',
          ...modalStyle,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          paddingLeft: '50px',
          paddingRight: "50px",
          paddingTop: "30px",
          maxWidth: '80%',
          maxHeight: '80%',
          overflow: 'auto'
        }}>
          <Box>
            <Box display={{ display: 'flex', justifyContent: 'space-between', paddingTop: "16px" }}>
              <DialogTitle id="form-dialog-title" sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
                Create Candidate
              </DialogTitle>
              <Typography sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: 'black', marginTop: '15px', marginRight: '10px' }}>
                <IconButton aria-label="close" onClick={handleCloseForm}>
                  <CloseIcon />
                </IconButton>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: '25px', paddingRight: '25px' }}>
            <Typography sx={{ color: '#767676', fontSize: '14px' }}>
              Creating candidates will allow you to fill in their details, upload resumes to their profiles, add them to jobs and much more.
              <Link href="#" sx={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer', '&:hover': { color: 'darkblue' } }}>
                Learn more
              </Link>
            </Typography>
          </Box>


          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <ImageUpload
            />
            <TextField
              autoFocus
              margin="dense"
              name="ClientName"
              label="Client Name"
              type="text"
              value={newRow.ClientName}
              onChange={handleChange}
              fullWidth
              sx={{ marginLeft: "50px", fontSize: "14px", marginRight: '10px' }}
            />
          </Box>

          <Box>
            {showAdvancedOptions && (
              <>
                <MuiTelInput
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number*"
                  value={formik.values.phoneNumber}
                  maxLength={10}
                  onChange={handleChange}
                  defaultCountry="IN"
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  sx={{ marginTop: '20px', fontSize: "14px", marginRight: '10px', marginLeft: "-10px" }}
                />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Company Email Address*"
                  type="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{ marginTop: '10px', fontSize: "14px", marginRight: '10px', marginLeft: "-10px" }}
                />
                <TextField
                  label="Add Location"
                  fullWidth
                  sx={{ marginTop: '10px', fontSize: "14px", marginRight: '10px', marginLeft: "-10px" }}
                />

                <Box sx={{
                  marginTop: '10px', fontSize: "14px", marginRight: '10px', width: "100%",
                  marginLeft: "-13px"
                }}>
                  <ClientDescription description={description} handleDescriptionChange={handleDescriptionChange} />
                </Box>
              </>
            )}
          </Box>

          <DialogActions sx={{ marginBottom: "10px", marginTop: '40px', padding: "25px", display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>
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














          {/* <Typography id="modal-form-title" variant="h6" component="h2">
            Complete Form
          </Typography> */}
          {/* <IconButton aria-label="close" onClick={handleCloseForm} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton> */}
          {/* <form onSubmit={handleSubmitForm}>
            <TextField id="firstName" label="First Name" variant="outlined" fullWidth margin="normal" />
            <TextField id="lastName" label="Last Name" variant="outlined" fullWidth margin="normal" />
            <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField id="message" label="Message" multiline rows={4} variant="outlined" fullWidth margin="normal" />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
          </form> */}
        </Box>
      </Modal>
      <Modal
        open={openMultipleResumesForm}
        onClose={handleCloseMultipleResumesForm}
        aria-labelledby="modal-multiple-resumes-title"
        aria-describedby="modal-multiple-resumes-description"
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
          <Typography id="modal-multiple-resumes-title" variant="h6" component="h2">
            Upload Multiple Resumes
          </Typography>
          <IconButton aria-label="close" onClick={handleCloseMultipleResumesForm} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
          <form onSubmit={handleSubmitMultipleResumesForm}>
            {/* Form fields for uploading multiple resumes */}
            {/* ... */}
          </form>
        </Box>
      </Modal>
      <Modal
        open={openTemplateForm}
        onClose={handleCloseTemplateForm}
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
          maxWidth: '70%',
          maxHeight: '70%',
          overflow: 'auto'
        }}>
          <Box>
            <Box display={{ display: 'flex', justifyContent: 'space-between', paddingTop: "16px" }}>
              <DialogTitle id="form-dialog-title" sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
                Create Candidate
              </DialogTitle>
              <Typography sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: 'black', marginTop: '15px', marginRight: '10px' }}>
                <IconButton aria-label="close" onClick={handleCloseTemplateForm}>
                  <CloseIcon />
                </IconButton>
              </Typography>
            </Box>

          </Box>
          <Box sx={{ paddingLeft: '25px', paddingRight: '25px' }}>
            <Typography sx={{ color: '#767676', fontSize: '14px' }}>
              Select jobs and/or folders below to automatically add the candidate to jobs and folders.
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
            <Typography sx={{ fontWeight: 'bold', color: 'black', fontSize: '14px', marginTop: "25px" }}>Select Jobs (Optional)</Typography>
            <Box sx={{ marginTop: '15px' }}>
              <Select
                options={options}
                isMulti
                value={selectedOptions}
                onChange={handleChanges}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
            <Typography sx={{ fontWeight: 'bold', color: 'black', fontSize: '14px', marginTop: "25px" }}>Select Folders (Optional)</Typography>
            <Box sx={{ marginTop: '15px' }}>
              <Select
                value={selectedFolder}
                isMulti
                onChange={handleFolderChange}
                options={folderOptions}
                placeholder="Select a folder"
              />
            </Box>
          </Box>
          <Box sx={{ marginLeft: "20px", marginRight: "20px", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: 'bold', color: 'black', fontSize: '14px', marginTop: "25px" }}>Resume Upload</Typography>
            <Box sx={{ marginTop: '15px', display: "flex", flexDirection: "column" }}>
              <FileUpload />
            </Box>
          </Box>

          <Button onClick={handleCloseTemplateForm} color="primary" sx={{ float: 'inline-end', marginTop: "15px" }}>
            Cancel
          </Button>





        </Box>
      </Modal>
    </>
  );
}
