import * as React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Container,
    Box,
} from '@mui/material';
import Layout from '../Layout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

const categories = [
    {
        'maingroup': "Overview",
        'data': [
            {
                'title': "Placements Made",
                'text': 'Total number of placements made over a given time period.'
            },
            {
                'title': "Matches Created",
                'text': 'Total number of matches created over a given time period.'
            },
            {
                'title': "Resumes Added",
                'text': 'Total number of resumes added over a given time period.'
            }
        ]
    },
    {
        'maingroup': "Pipeline Performance",
        'data': [
            {
                'title': "Recruitment Funnel",
                'text': 'Recruitment funnel performance based on your pipeline stages.'
            },

            {
                'title': "Key Pipeline Stages by Job",
                'text': 'Matches sorted by job and key pipeline stage.'
            }
        ]
    },
    {
        'maingroup': "Pipeline Performance Ratios",
        'data': [
            {
                'title': "Submitted to Interview Ratio",
                'text': '% of candidates in submitted stage that reach the interview stage.'
            },
            {
                'title': "Offer to Placement Ratio",
                'text': '% of candidates in offer stage that reach the placement stage.'
            },

            {
                'title': "Added to Submitted Ratio",
                'text': '% of candidates in added stage tha.'
            },
            {
                'title': "Added to Placement Ratio",
                'text': '% of candidates in added stage that reach the placed stage.'
            }
        ]
    },
    {
        'maingroup': "Channel Performance",
        'data': [
            {
                'title': "Application Channel Performance",
                'text': 'Candidates sorted by application channe.'
            },

            {
                'title': "User Performance",
                'text': 'Candidates sorted by user and application status.'
            }
        ]
    },
    {
        'maingroup': "Interview Ratios",
        'data': [
            {
                'title': "Interview Ratio by Source",
                'text': '% of candidates having reached the in.'
            },
            {
                'title': "Interview Ratio by Application Channel",
                'text': '% of candidates that reached the inte.'
            },
            {
                'title': "Interview Ratio by Referrer",
                'text': '% of candidates having reached t.'
            }
        ]
    }
];

export default function Hiringperformance() {
    return (
        <Box style={{ margin: 50 }}>
            <Layout /><br />

            <Container>
                {categories.map(category => (
                    <div key={category.maingroup}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <Typography variant="h5" style={{ fontWeight: 'bold' }}>{category.maingroup}</Typography><br />
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                {category.data.map((item) => (
                                    <Card key={item.title} sx={{ maxWidth: 400, height: '250px', marginBottom: '20px', marginRight: '20px', whiteSpace: 'collapse' }}>
                                        <BarChart
                                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                            width={300}
                                            height={140}
                                        />
                                        <CardContent >
                                            <Typography gutterBottom variant="h6" component="div" sx={{ overflowWrap: 'break-word' }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        </Box>
                    </div>
                ))}
            </Container>

        </Box>
    )
}
