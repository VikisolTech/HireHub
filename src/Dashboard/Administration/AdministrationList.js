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
        "title": "Account & Users",
        "text": "Manage your account details, users, groups and guests."
    },
    {
        "title": "Data Management",
        "text": "Track GDPR consent and view logs. Import candidates, jobs and more."
    },
    {
        "title": "Integrations",
        "text": "Manage your third-party software and tool integrations."
    },
    {
        "title": "Subscription",
        "text": "Manage your subscription, payment methods, and access your invoices."
    },
    {
        "title": "Career Page",
        "text": "Enable and set-up your career page."
    },
    {
        "title": "Job Boards",
        "text": "Manage your job boards and publish your open positions."
    },
    {
        "title": "Resumes",
        "text": "Set up your candidate resumes via branded and custom resume features."
    },
    {
        "title": "Customization",
        "text": "Customize your jobs, clients, contacts, candidates, and dashboard."
    },
    {
        "title": "Features",
        "text": "Manage duplicate detection, vendors, employees and other settings."
    },
    {
        "title": "Support",
        "text": "Grant our support team access to your Manatal account, check our documentations or report an incident."
    }
]


export default function AdministartionList() {
    const navigate = useNavigate();

    return (
        <Box style={{ margin: 50 }}>
            <Layout />

            <Container sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {categories.map(category => (
                    <Card key={category} sx={{ width: 400, marginBottom: '20px', display: 'flex', flexDirection: 'column', cursor: 'pointer', }}
                        onClick={() => {
                            navigate(`/settings/${category.title}`);
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* {React.cloneElement(category.icon, { sx: { fontSize: 45, margin: 5 } })} */}
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