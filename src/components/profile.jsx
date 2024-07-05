import React, { useState,useEffect } from "react";
import { updateUserDetails, getUserDetails } from "./utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const update = async () => {
    try {
      await updateUserDetails(userDetails);
      toast.success("Updated Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  const userData = async () => {
    try {
      const data = await getUserDetails();
      setUserDetails(data.data["user"]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    userData();
  }, []);
  return (
    <>
    {userDetails?(
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
            <Avatar sx={{ bgcolor: 'pink', marginTop:1 }}>{userDetails['firstName'][0]+userDetails['lastName'][0]}</Avatar>
            <Typography component="h1" variant="h5">
              Profile
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
                  value={userDetails.firstName}
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
                  value={userDetails.lastName}
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
                  value={userDetails.userName}
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
                  value={userDetails.mobileNumber}
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
                  value={userDetails.email}
                  margin="normal" // To add some margin like mt-3
                  disabled
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={update}
            >
              Update Profile
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    ):(<Box sx={{justifyContent:'center',alignItems:'center'}}>Please Login</Box>)}
    
    </>
    
  );
}

export default Profile;


