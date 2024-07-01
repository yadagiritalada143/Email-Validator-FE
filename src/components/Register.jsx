import React, { useState } from "react";
import { registerUser } from "./utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.example.com/">
        Example Application
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == "userRole")
      setFormData((prev) => { return { ...prev, [name]: event.target.checked == true ? "ADMIN" : "USER" } });
    else
      setFormData((prev) => { return { ...prev, [name]: value } });
  }

  const register = async () => {
    try {
      await registerUser(formData);
      toast.success("Registered Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
                value={formData.firstName}
                placeholder="First Name" // Optional
                margin="normal" // To add some margin like mt-1
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="family-name"
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Last Name" // Optional
                margin="normal" // To add some margin like mt-1
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete="username"
                name="userName"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={handleChange}
                value={formData.userName}
                placeholder="Username" // Optional
                margin="normal" // To add some margin like mt-1
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete="tel"
                name="mobileNumber"
                required
                fullWidth
                id="mobileNumber"
                label="Mobile Number"
                type="number"
                onChange={handleChange}
                value={formData.mobileNumber}
                placeholder="Mobile Number" // Optional
                margin="normal" // To add some margin like mt-3
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Email"
                margin="normal" // To add some margin like mt-3
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={formData.password}
                placeholder="*******"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="userRole"
                    color="primary"
                    onChange={handleChange}
                  />
                }
                label="Register as Admin"
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={register}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register;


