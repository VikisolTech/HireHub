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

const Profile = () => {
    return (
        <Box style={{ margin: 50 }}>
            <Layout /><br />
            <ProfileCard>
                <CardContent>
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                        Profile
                    </Typography>

                    <EditIconButton>
                        <Button variant='contained'>
                            <Edit />
                        </Button>
                    </EditIconButton>
                    <Typography variant="body2" paragraph>
                        Manage your user profile and contact details. Changes will affect how other users see you within Manatal.
                    </Typography>
                    <Grid container spacing={2}>
                        <ProfileField label="Full Name" value="Sekhar Velpula" />
                        <ProfileField label="Display Name" value="Sekhar Velpula" />
                        <ProfileField label="Role" value="Sekhar Admin" />
                        <ProfileField label="Email" value="anand@gmail.com" />
                        <ProfileField label="Phone Number" value="9182043376" />
                    </Grid>
                </CardContent>
            </ProfileCard> <br /><br />
            <ProfileCard>
                <CardContent>
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                        Change Password
                    </Typography>
                    <Typography >
                        Change your account's current password
                    </Typography>
                </CardContent>
            </ProfileCard>
        </Box>
    );
};

export default Profile;
