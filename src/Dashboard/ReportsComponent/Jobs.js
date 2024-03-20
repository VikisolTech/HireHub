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

const categories = ['Jobs by Status', 'Jobs Table by Client',];
const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['red', 'blue', 'green'];
export default function Jobs() {
    return (
        <Box >
            <Layout />

            <Container sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap',marginTop:"20px" ,justifyContent:"center"}}>
                {categories.map(category => (
                    <Card key={category} sx={{ maxWidth: 450, marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PieChart
                                colors={palette}
                                series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
                                {...pieParams}
                            />
                            <CardContent sx={{ width: '60%', padding: '16px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {category}
                                </Typography>
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
    )
}
