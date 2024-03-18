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
        'maingroup': "Candidate Performance",
        'data': [
            {
                'title': "Candidates created by user",
                'text': 'Total number of candidates created sorted by user.'
            },
            {
                'title': "Candidates owned by user",
                'text': 'Total number of candidates owned sorted by user.'
            }
        ]
    },
    {
        'maingroup': "Recruitment Performance",
        'data': [
            {
                'title': "Matches by user",
                'text': 'Total number of matches sorted by user.'
            },
            {
                'title': "Placements by user",
                'text': 'Total number of Placements sorted by user.'
            },
            {
                'title': "Dropped candidates by user",
                'text': 'Total number of dropped matches sorted by user.'
            },
            {
                'title': "Activity report by user",
                'text': 'Activities, emails, notes and attachments sorted by user.'
            }
        ]
    },
    {
        'maingroup': "Job Performance",
        'data': [
            {
                'title': "Candidates’ most advanced stage by user",
                'text': 'Most advanced stage of candidates sorted by user.'
            },
            {
                'title': "Jobs by status by creator",
                'text': 'All jobs’ status sorted by user.'
            }
        ]
    }
];


export default function LeaderBoard() {
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
                                            width={200}
                                            height={120}
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
