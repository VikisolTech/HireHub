import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { MuiTelInput } from 'mui-tel-input';
import { Radio } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const validationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Company Email is required'),
    emailCompany: yup.string().email('Invalid email address').required('Confirm Company Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    companyName: yup.string().required('Company name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    organizationName: yup.string().required('Organization name is required'),
    privacyPolicy: yup.boolean().oneOf([true], 'You must agree to the privacy policy and terms and conditions').required(),
});

const Creataccount = () => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChanges = (event) => {
        setSelectedValue(event.target.value);
    };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    
    const formik = useFormik({
        initialValues: {
            email: '',
            emailCompany:'',
            password: '',
            confirmPassword: '',
            companyName: '',
            phoneNumber: '',
            organizationName: '',
            privacyPolicy: false,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
           
            console.log('Form data:', values);
            console.log('Data type:', typeof values);
        },
    });

    const handleChange = (newPhone) => {
        formik.setFieldValue('phoneNumber', newPhone);
    };

    const handleSubmit = () => {
        formik.handleSubmit();
    };

    return (
        <Grid sx={{ marginTop: "15px" }}>
            <Card variant="outlined" sx={{
                borderRadius: 4,
                width: "800px",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)'
            }}>
                <Container component="main">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // marginTop: '15px'
                        }}
                    >
                        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography sx={{ fontSize: "14px" }} >
                            Manatal
                        </Typography>
                        <Typography sx={{ mt: "10px", fontWeight: 400, fontSize: "25px" }}>
                            Start Your Free Trial
                        </Typography>
                        <Typography sx={{ mt: "8px", fontSize: '16px' }}>
                            14-day free trial and no credit card required.
                        </Typography>
                        <Typography sx={{ mt: "8px", fontSize: '16px' }}>
                            Get started in less than 20 seconds!
                        </Typography>
                        <form style={{ width: '90%',mt:"20px" }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <TextField
                                    fullWidth
                                    name="companyName"
                                    label="Name*"
                                    value={formik.values.companyName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                    helperText={formik.touched.companyName && formik.errors.companyName}
                                    sx={{ marginTop: '10px', fontSize: "14px", marginRight: '10px' }}
                                />
                                <TextField
                                    fullWidth
                                    name="organizationName"
                                    label="Organization Name*"
                                    value={formik.values.organizationName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.organizationName && Boolean(formik.errors.organizationName)}
                                    helperText={formik.touched.organizationName && formik.errors.organizationName}
                                    sx={{ marginTop: '10px', fontSize: "14px", marginLeft: '10px' }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Company Email Address*"
                                    type="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    sx={{ marginTop: '10px', fontSize: "14px", marginRight: '10px' }}
                                />
                                <TextField
                                    fullWidth
                                    id="emailCompany"
                                    name="emailCompany"
                                    label="Confirm Company Email Address *"
                                    type="email"
                                    autoComplete="email"
                                    value={formik.values.emailCompany}
                                    onChange={formik.handleChange}
                                    error={formik.touched.emailCompany && Boolean(formik.errors.emailCompany)}
                                    helperText={formik.touched.email && formik.errors.emailCompany}
                                    sx={{ marginTop: '10px', fontSize: "14px", marginLeft: '10px' }} 
                                />
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password*"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    sx={{ marginTop: '10px', fontSize: "14px", marginRight: '10px' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleTogglePasswordVisibility}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <MuiTelInput
                                    fullWidth
                                    name="phoneNumber"
                                    label="Phone Number*"
                                    value={formik.values.phoneNumber}
                                    maxLength={10} 
                                    onChange={handleChange}
                                    defaultCountry="IN"
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                    sx={{ marginTop: '10px', fontSize: "14px", marginLeft: '10px' }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Box
                                    height={100}
                                    width={400}
                                    my={4}
                                    display="flex"
                                    alignItems="center"
                                    gap={4}
                                    p={2}
                                    sx={{
                                        border: selectedValue === 'a' ? '2px solid #1976d2' : '1px solid grey',
                                        borderRadius: '5px',
                                        marginTop: '10px',
                                        fontSize: "14px",
                                        marginRight: '5px',
                                        cursor: 'pointer',
                                        backgroundColor: selectedValue === 'a' ? 'rgba(25, 118, 210, 0.04);' : 'transparent' // Light blue background color when selectedValue is 'a'
                                    }}
                                    onClick={() => setSelectedValue('a')}
                                >
                                    <Radio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChanges}
                                        value="a"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <Box>
                                        <Typography sx={{ fontWeight: '500' }}> Agency Account
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px" }}>
                                            Best for teams recruiting on behalf of their own company.
                                        </Typography>

                                    </Box>

                                </Box>
                                <Box
                                    height={100}
                                    width={400}
                                    my={4}
                                    display="flex"
                                    alignItems="center"
                                    gap={4}
                                    p={2}
                                    sx={{
                                        border: selectedValue === 'b' ? '2px solid #1976d2' : '1px solid grey',
                                        borderRadius: '5px',
                                        marginTop: '10px',
                                        fontSize: "14px",
                                        marginLeft: '5px',
                                        cursor: 'pointer',
                                        backgroundColor: selectedValue === 'b' ? 'rgba(25, 118, 210, 0.04);' : 'transparent' // Light blue background color when selectedValue is 'a'
                                    }}
                                    onClick={() => setSelectedValue('b')}
                                >
                                    <Radio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChanges}
                                        value="b"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'B' }}
                                    />
                                    <Box>
                                        <Typography sx={{ fontWeight: '500' }}>Company Account</Typography>

                                        <Typography sx={{ fontSize: "12px" }}>
                                            Best for teams recruiting on behalf of their own company.
                                        </Typography>
                                    </Box>

                                </Box>
                            </Box>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox
                                        name="privacyPolicy"
                                        checked={formik.values.privacyPolicy}
                                        onChange={formik.handleChange}
                                        color="primary"
                                    />}
                                    label={<Typography variant="contained" sx={{ fontSize: "14px" }}>I agree to the <Link to="/privacy-policy" style={{ textDecoration: 'underline', color: "#1976d2" }}>privacy policy</Link> and <Link to="/terms-conditions" style={{ textDecoration: 'underline', color: "#1976d2" }}>terms and conditions</Link></Typography>}
                                />
                                {formik.errors.privacyPolicy && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.privacyPolicy}
                                    </Typography>
                                )}
                            </Grid>
                            <Button
                            onClick={handleSubmit}
                            fullWidth
                            variant="contained"
                            sx={{ marginTop: '10px', borderRadius: "20px", padding: "10px" }}
                        >
                            Sign Up
                        </Button>
                        </form>
                       
                        <Typography variant="contained" sx={{ fontSize: "16px", mb: "10px", mt: "20px" }}>Already have an account?<Link to="/" style={{ textDecoration: 'underline', color: "#1976d2" }}> Sign In</Link> </Typography>
                    </Box>
                </Container>
            </Card>
        </Grid>
    );
};

export default Creataccount;
