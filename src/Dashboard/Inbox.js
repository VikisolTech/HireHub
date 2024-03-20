import React, { useState } from 'react';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import { FaInbox, FaRegPaperPlane, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Modal,
} from '@mui/material';
import { AiOutlineInbox, AiOutlineMail } from 'react-icons/ai';

const drawerWidth = 220;

export default function Inbox() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Move isOpen state to the parent component

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const sendEmail = () => {
    handleClose();
  };

  const renderPageContent = () => {
    if (selectedIndex === 0) {
      return (
        <>
          <Box sx={{ padding: '20px', textAlign: 'center', width: '100%' }}>
            <img src='https://media.istockphoto.com/id/1303742901/vector/email-marketing-message-concept.jpg?s=612x612&w=0&k=20&c=qQIuqm_xHVMMN-HWy7it-Mw62oNVppQe2ImmoJP499U=' alt='email' width='400px' height='200px' style={{ display: 'inline' }} />
            <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: 'bold', color: 'black', }}>
              No email provider integrated yet.
            </Typography>
            <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontsize: '14px', color: "#767676" }}>
              In order to best leverage Manatal's inbox, please integrate your Google or Outlook email to sync all your candidate and contact<br /> emails with Manatal.
            </Typography>
            <Typography sx={{ textAlign: 'center', color: "#1976d2", cursor: 'pointer', marginBottom: '10px', fontsize: '14px', }}>
              Learn more about email integrations.
            </Typography>
            <Link to="/settings">
              <Button variant="contained" sx={{ marginBottom: '10px', fontSize: '14px', textTransform: 'none' }}> Integrate your email</Button>

            </Link>

          </Box>

        </>

      );
    } else {
      switch (selectedIndex) {
        case 1:
          return (
            <>
              <Box sx={{ padding: '20px', textAlign: 'center', width: '100%' }}>
                <img src='https://media.istockphoto.com/id/1303742901/vector/email-marketing-message-concept.jpg?s=612x612&w=0&k=20&c=qQIuqm_xHVMMN-HWy7it-Mw62oNVppQe2ImmoJP499U=' alt='email' width='400px' height='200px' style={{ display: 'inline' }} />
                <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: 'bold', color: 'black', }}>
                  No email provider integrated yet.
                </Typography>
                <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontsize: '14px', color: "#767676" }}>
                  In order to best leverage Manatal's inbox, please integrate your Google or Outlook email to sync all your candidate and contact<br /> emails with Manatal.
                </Typography>
                <Typography sx={{ textAlign: 'center', color: "#1976d2", cursor: 'pointer', marginBottom: '10px', fontsize: '14px', }}>
                  Learn more about email integrations.
                </Typography>
                <Link to="/settings">
                  <Button variant="contained" sx={{ marginBottom: '10px', fontSize: '14px', textTransform: 'none' }}> Integrate your email</Button>

                </Link>

              </Box>

            </>
          );
        case 2:
          return (
            <>
              <Box sx={{ padding: '20px', textAlign: 'center', width: '100%' }}>
                <img src='https://media.istockphoto.com/id/1303742901/vector/email-marketing-message-concept.jpg?s=612x612&w=0&k=20&c=qQIuqm_xHVMMN-HWy7it-Mw62oNVppQe2ImmoJP499U=' alt='email' width='400px' height='200px' style={{ display: 'inline' }} />
                <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: 'bold', color: 'black', }}>
                  No email provider integrated yet.
                </Typography>
                <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontsize: '14px', color: "#767676" }}>
                  In order to best leverage Manatal's inbox, please integrate your Google or Outlook email to sync all your candidate and contact<br /> emails with Manatal.
                </Typography>
                <Typography sx={{ textAlign: 'center', color: "#1976d2", cursor: 'pointer', marginBottom: '10px', fontsize: '14px', }}>
                  Learn more about email integrations.
                </Typography>
                <Link to="/settings">
                  <Button variant="contained" sx={{ marginBottom: '10px', fontSize: '14px', textTransform: 'none' }}> Integrate your email</Button>

                </Link>


              </Box>

            </>
          );
        default:
          return null;
      }
    }
  };

  return (
    <>
      <Layout />
      <Box>
        <AppBar position="static" style={{ backgroundColor: '#f1f4f8', marginTop: '-45px' }}>
          <Toolbar variant="dense">
            <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
              Inbox
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex' }}>
          <Card
            style={{ backgroundColor: '#f1f4f8', height: '100vh', display: 'flex', flexDirection: 'column' }}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                marginTop: "115px",
              },
            }}
          >
            <Toolbar />
            <Box marginLeft={"20px"}>
              <Button variant="contained" onClick={handleOpen} startIcon={<EmailIcon />}>
                Compose
              </Button>
            </Box>
            <Modal open={isOpen} onClose={handleClose}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  New Email
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Compose your email here...
                </Typography>
                <Button variant="contained" onClick={sendEmail}>
                  Send
                </Button>
              </Box>
            </Modal>
            <div style={{ overflow: 'auto', marginTop: "40px", flex: 1 }}>
              <List>
                {['Inbox', 'Sent', 'Drafts'].map((text, index) => (
                  <ListItem
                    button
                    key={text}
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                  >
                    <ListItemIcon>
                      {index === 0 ? <FaInbox /> : index === 1 ? <FaRegPaperPlane /> : <FaFileAlt />} {/* Use different icons based on the index */}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </div>
          </Card>

          <Box>
            <main style={{ flexGrow: 2, height: '100vh', width: '120.9%', padding: '20px', overflow: 'auto' }}>
              {renderPageContent()}
            </main>
          </Box>

        </Box>
      </Box>

    </>
  );
}
