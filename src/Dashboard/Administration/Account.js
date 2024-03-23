import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Divider, Grid, Box, IconButton, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import Layout from '../Layout';

const ProfileCard = styled(Card)({
    maxWidth: 1000,
    margin: 'auto',
    marginTop: theme => theme.spacing(4),
    position: 'relative',
});

const EditIconButton = styled(IconButton)({
    float: 'right',
    borderRadius: '50%',

});

const ProfileField = ({ label, value }) => (
    <>
        <Grid item xs={6}>
            <Typography variant="subtitle1" >{label}</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography variant="body2" paragraph>{value}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Divider />
        </Grid>
    </>
);

const Account = () => {
    return (
        <Box style={{ margin: 50 }}>
            <Layout /><br />
            <ProfileCard>
                <CardContent>
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                    Account Details
                    </Typography>

                    <EditIconButton>
                        <Button variant='contained'>
                            <Edit />
                        </Button>
                    </EditIconButton>
                    <Typography variant="body2" paragraph>
                    Add or modify your company’s displayed name and logo.
                    </Typography>
                    <Grid container spacing={2}>
                        <ProfileField label="Logo" value="Sekhar Admin" />
                        <ProfileField label="Name" value="Vikisol" />
                        <ProfileField label="Type" value="Company" />
                    </Grid>
                </CardContent>
            </ProfileCard> <br /><br />
        </Box>
    );
};

export default Account;
