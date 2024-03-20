import * as React from 'react';
import {
    Card,
    CardMedia,
    Container,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    IconButton,
} from '@mui/material';
import Layout from '../Layout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { } from '@mui/icons-material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SettingsAccessibilitySharpIcon from '@mui/icons-material/SettingsAccessibilitySharp';
import IntegrationInstructionsSharpIcon from '@mui/icons-material/IntegrationInstructionsSharp';
import NotificationsOffSharpIcon from '@mui/icons-material/NotificationsOffSharp';
import DraftsSharpIcon from '@mui/icons-material/DraftsSharp';
const categories = [
    {
        'title': "Profile",
        'text': 'View and edit your personal profile settings. Manage your password.',
        'icon': <AccountCircleSharpIcon />
    },
    {
        'title': "Preferences",
        'text': 'Set your preferred currency, as well as time and date formats.',
        'icon': <SettingsAccessibilitySharpIcon />
    },
    {
        'title': "Integrations",
        'text': 'Manage your calendar and email integrations.',
        'icon': <IntegrationInstructionsSharpIcon />
    },
    {
        'title': "Notifications",
        'text': 'Manage your in-app and email notifications.',
        'icon': <NotificationsOffSharpIcon />
    },
    {
        'title': "Email Settings",
        'text': 'Manage your email settings and templates.',
        'icon': <DraftsSharpIcon />
    }
];

export default function Settings() {
    const navigate = useNavigate();

    return (
        <Box >
            <Layout />

            <Container sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap',justifyContent: 'center',marginTop:"20px" }}>
                {categories.map(category => (
                    <Card key={category} sx={{ maxWidth: 450, marginBottom: '20px', display: 'flex', flexDirection: 'column', cursor: 'pointer', }}
                        onClick={() => {
                            navigate(`/settings/${category.title}`);
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {React.cloneElement(category.icon, { sx: { fontSize: 45, margin: 5 } })}

                            <CardContent sx={{ width: '60%', padding: '16px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {category.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {category.text}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton size="small">
                                    <ArrowForwardIcon />
                                </IconButton>
                            </CardActions>
                        </Box>
                    </Card>
                ))}
            </Container>
        </Box>
    );
}
