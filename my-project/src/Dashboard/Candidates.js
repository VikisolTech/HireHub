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
                height: "155px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "form" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("form")}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenForm}
            >
              <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: "bold" }}>Complete a Form</Typography>
            </Card>

            <Card
              sx={{
                width: "50%",
                cursor: 'pointer',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "155px",
                ml: "20px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "template" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("template")}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenTemplateForm}
            >
              <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: "bold" }}>Use Template</Typography>
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
                height: "155px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "resumes" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("resumes")}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenMultipleResumesForm}
            >
              <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: "bold" }}>Upload Multiple Resumes</Typography>
            </Card>

            <Card
              sx={{
                width: "50%",
                cursor: 'pointer',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "155px",
                ml: "20px",
                transition: 'background-color 0.3s',
                backgroundColor: hoveredCard === "import" ? '#e0e0e0' : 'initial',
              }}
              onMouseEnter={() => handleMouseEnter("import")}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpenTemplateForm}
            >
              <Typography variant="contained" sx={{ cursor: 'pointer', fontWeight: "bold" }}>Import a JSON or CSV file</Typography>
            </Card>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openForm}
        onClose={handleCloseForm}
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
            <TextField id="firstName" label="First Name" variant="outlined" fullWidth margin="normal" />
            <TextField id="lastName" label="Last Name" variant="outlined" fullWidth margin="normal" />
            <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField id="message" label="Message" multiline rows={4} variant="outlined" fullWidth margin="normal" />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
          </form>
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
          <form onSubmit={handleSubmitTemplateForm}>
            {/* Form fields for using a template */}
            {/* ... */}
          </form>
        </Box>
      </Modal>
    </>
  );
}
