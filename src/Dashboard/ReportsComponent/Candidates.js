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
import { PieChart } from '@mui/x-charts/PieChart';

const categories = ['Candidates by Source', 'Candidates by Application chanel', 'Candidates by Sourcing chanel', 'Candidates by Referer', 'Sourced Candidates by USer'];

export default function Candidates() {
    return (
        <Box >
            <Layout />
            <Box sx={{ alignItems: "center",marginTop:"20px" }}>
                <Container sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap',justifyContent: 'center' }}>
                    {categories.map(category => (

                        <Card key={category} sx={{ maxWidth: 500, marginBottom: '20px', flexDirection: 'column' }}>
                            <Typography gutterBottom variant="h5" sx={{ textAlign: "center", paddingTop: "25px" }}>
                                {category}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PieChart
                                    series={[
                                        {
                                            data: [
                                                { id: 0, value: 10, label: 'series A' },
                                                { id: 1, value: 15, label: 'series B' },
                                                { id: 2, value: 20, label: 'series C' },
                                            ],
                                        },
                                    ]}
                                    width={400}
                                    height={200}
                                />
                                <CardContent sx={{ width: '60%', padding: '16px' }}>

                                    <Typography variant="body2" color="text.secondary">
                                        {`This is the description for ${category}.`}
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

        </Box>
    )
}
