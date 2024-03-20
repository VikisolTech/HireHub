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
        'maingroup': "CRM",
        'data': [
            {
                'title': "Clients by Pipeline Stage",
                'text': 'CRM funnel performance based on your Client pipeline stages.'
            },
            {
                'title': "Clients by user",
                'text': 'Clients sorted by user and pipeline stage.'
            }
        ]
    }
];



export default function Sales() {
    return (
        <Box>
            <Layout />

            <Container sx={{marginTop:"20px"}}>
                {categories.map(category => (
                    <div key={category.maingroup}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <Typography variant="h5" style={{ fontWeight: 'bold',textAlign:"center" }}>{category.maingroup}</Typography><br />
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' ,justifyContent:"center"}}>
                                {category.data.map((item) => (
                                    <Card key={item.title} sx={{ maxWidth: 350, height: '250px', marginBottom: '20px', marginRight: '20px', whiteSpace: 'collapse' }}>
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
