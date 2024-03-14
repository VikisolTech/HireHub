import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React from 'react'; // Removed unused import
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
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log('Form data:', values);
            console.log('Data type:', typeof values);
        },
    });

 

    return (
        <Grid sx={{ marginTop: "40px" }}>
            <Card variant="outlined" sx={{
                borderRadius: 4,
                width: "700px",
                height: "600px",
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
                        <Typography component="h1" variant="h5" sx={{ mt: "20px", color: '#1e7dc0', fontWeight: 400 }}>
                            Log in to Manatal
                        </Typography>

                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                autoComplete="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                sx={{ mt: 3, fontSize: "14px" }}
                            />
                            <TextField
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                sx={{ mt: 2, fontSize: "14px" }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, borderRadius: "20px", padding: "10px" }}
                            >
                                Login In
                            </Button>
                        </form>
                        <Link to="/forget">
                            <Typography sx={{ fontSize: '14px', cursor: 'pointer', marginTop: "10px", fontWeight: 600 }}>
                                Forgot your password?
                            </Typography>
                        </Link>

                        <Typography sx={{ fontSize: '14px', marginTop: "14px" }}>
                            Not registered on Manatal yet?
                        </Typography>
                        <Link to='/singup'>
                        <Typography sx={{ fontSize: '12px', color: '#1e7dc0', cursor: 'pointer', marginTop: "5px", fontWeight: 600 }}>
                            Create your account
                        </Typography>
                        </Link>
                      
                        <Typography sx={{ fontSize: '14px', marginTop: "8px", color: "#9c27b0" }}>
                            ---- OR -----
                        </Typography>
                        <Link to="/singin">
                        <Typography sx={{ fontSize: '12px', color: '#1e7dc0', marginTop: "8px", cursor: 'pointer', fontWeight: 600 }}>
                            Sign in with SSO
                        </Typography>
                        </Link>
                    </Box>
                </Container>
            </Card>
        </Grid>
    );
};

export default Login;
