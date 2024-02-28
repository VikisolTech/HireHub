import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React, { useState } from 'react'; // Import useState
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
    email: yup.string().email('Invalid Company Domain').required('Company Domain is required'),
});




const Singin = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); // State variable for managing submission status

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log('Form data:', values);
            console.log('Data type:', typeof values);
            setIsSubmitted(true); // Set submission status to true
        },
    });

    return (
        <Grid sx={{ marginTop: "40px" }}>
            <Card variant="outlined" sx={{
                borderRadius: 4,
                width: "700px",
                height: "450px",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)'
            }}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography sx={{ fontSize: "14px" }} >
                            Manatal
                        </Typography>
                       
                            <>
                                <Typography component="h1" variant="h5" sx={{ mt: "20px", color: '#1e7dc0', fontWeight: 400 }}>
                                    Sign in with SSO
                                </Typography>

                                <form onSubmit={formik.handleSubmit}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Company Domain"
                                        autoComplete="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        sx={{ mt: 3, fontSize: "14px" }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, borderRadius: "20px", padding: "10px" }}
                                    >
                                        Login
                                    </Button>
                                   
                                </form>
                                <Typography sx={{ fontSize: '14px', marginTop: "8px", color: "#9c27b0" }}>
                                        ---- OR -----
                                    </Typography>
                                    <Link to="/">
                                        <Typography sx={{ fontSize: '12px', color: '#1e7dc0', marginTop: "8px", cursor: 'pointer', fontWeight: 600 }}>
                                            Sign in with email & password
                                        </Typography>
                                    </Link>
                            </>
                        
                       
                    </Box>
                </Container>
            </Card>
        </Grid >
    );
};

export default Singin;
