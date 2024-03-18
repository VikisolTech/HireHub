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

const Preferences = () => {
    return (
        <Box style={{ margin: 50 }}>
            <Layout /><br />
            <ProfileCard>
                <CardContent>
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                        Preferences
                    </Typography>

                    <EditIconButton>
                        <Button variant='contained'>
                            <Edit />
                        </Button>
                    </EditIconButton>
                    <Typography variant="body2" paragraph>
                        Set your preferred currency, as well as time and date formats. Any changes will only be reflected in your account. Changing the preferred currency will not update any monetary values already in your account.
                    </Typography>
                    <Grid container spacing={2}>
                        <ProfileField label="Prefred date Format" value=" YY - MM -DD" />
                        <ProfileField label="Prefred time Format" value="24 Hrs" />
                        <ProfileField label="Prefred time Format" value="US Dollar" />
                        <ProfileField label="Prefred time Format" value="English" />
                    </Grid>
                </CardContent>
            </ProfileCard> <br /><br />
        </Box>
    );
};

export default Preferences;
