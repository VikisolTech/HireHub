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
import DirectionsRunSharpIcon from '@mui/icons-material/DirectionsRunSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp';
import ThumbsUpDownSharpIcon from '@mui/icons-material/ThumbsUpDownSharp';
const categories = [
    {
        "title": "Data Import",
        "text": "Import data to your account such as candidates, jobs, departments, contacts, resumes and more."
    },
    {
        "title": "GDPR Tracking",
        "text": "Track candidate GDPR consent."
    },
    {
        "title": "Logs",
        "text": "View all actions taken by users on your account."
    },
    {
        "title": "Archive Data",
        "text": "Archive, restore, or permanently delete candidates from your account."
    }
]

export default function Datamanagement() {
    const navigate = useNavigate();

    return (
        <Box>
            <Layout />

            <Container sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: "20px" }}>
                {categories.map(category => (
                    <Card key={category} sx={{ maxWidth: 450, marginBottom: '20px', display: 'flex', flexDirection: 'column', cursor: 'pointer', }}
                        onClick={() => {
                            navigate(`/Administration/Account-and-Users/${category.title}`);
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* {React.cloneElement(category.icon, { sx: { fontSize: 40, margin: 5 } })} */}

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
