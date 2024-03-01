import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DraftsIcon from '@mui/icons-material/Drafts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';


const drawerWidth = 220;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const CustomListItemButton = styled(ListItemButton)({
  // paddingRight: '40px',
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Vikisol
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ background: "#1976d2" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ background: "rgba(25, 118, 210, 0.04)" }}>
          {['Home', 'Clients', 'Jobs', 'Candidates'].map((text, index) => (
            <Link to={text === 'Home' ? '/home' : `/${text.toLowerCase()}`} key={text}>
              <ListItem key={text} disablePadding>
                <CustomListItemButton component="div">
                  <ListItemIcon>
                    {index === 0 ? <HomeIcon /> : (index === 1 ? <MailIcon /> : (index === 2 ? <WorkIcon /> : <GroupIcon />))}
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontWeight: 'bold' }}>{text}</span>} />
                </CustomListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List sx={{ background: "rgba(25, 118, 210, 0.04)" }}>
          {['Placements', 'Activities', 'Inbox'].map((text, index) => (
            <Link to={text === 'Placements' ? '/placements' : `/${text.toLowerCase()}`} key={text}>
              <ListItem disablePadding>
                <CustomListItemButton component="div">
                  <ListItemIcon>
                    {index === 0 ? <AssignmentIcon /> : (index === 1 ? <DraftsIcon /> : <EmailIcon />)}
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontWeight: 'bold' }}>{text}</span>} />
                </CustomListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />

        <List sx={{ background: "rgba(25, 118, 210, 0.04)" }}>
          {['Reports', 'Settings', 'Administration'].map((text, index) => (
            <Link to={text === 'Reports' ? '/reports' : `/${text.toLowerCase()}`} key={text}>
              <ListItem disablePadding>
                <CustomListItemButton component="div">
                  <ListItemIcon>
                    {index === 0 ? <AssessmentIcon /> : (index === 1 ? <SettingsIcon /> : <SupervisedUserCircleIcon />)}
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontWeight: 'bold' }}>{text}</span>} />
                </CustomListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>


      </Drawer>

      <Main open={open} >
        <DrawerHeader />
      </Main>
    </Box>
  );
}
