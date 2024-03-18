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
    'title': "Candidates",
    'text': 'View all reports related to Your Candidates.',
    'icon': <PeopleAltSharpIcon />
  },
  {
    'title': "Hiring_process",
    'text': 'View all reports related to Your Matches and Hiring Performance',
    'icon': <DirectionsRunSharpIcon />

  },
  {
    'title': "Jobs",
    'text': 'View all reports related to Your Jobs.',
    'icon': <WorkSharpIcon />

  },
  {
    'title': "Leaderboard",
    'text': 'View all reports related to Your Leaderboard',
    'icon': <LeaderboardSharpIcon />

  },
  {
    'title': "Sales",
    'text': 'View all reports related to Your Sales',
    'icon': <ThumbsUpDownSharpIcon />

  }
]

export default function Reports() {
  const navigate = useNavigate();

  return (
    <Box style={{ margin: 50 }}>
      <Layout />

      <Container sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <Card key={category} sx={{ maxWidth: 400, marginBottom: '20px', display: 'flex', flexDirection: 'column', cursor: 'pointer', }}
            onClick={() => {
              navigate(`/reports/${category.title}`);
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {React.cloneElement(category.icon, { sx: { fontSize: 40, margin: 5 } })}

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
