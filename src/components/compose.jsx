import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { styled} from '@mui/material/styles';

const Compose = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, justifyContent: "center", alignItems: "end" }}
    >
      <DrawerHeader />
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="To" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: 3,
        }}
      >
        <TextField fullWidth label="Title" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: 3,
        }}
      >
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={10}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: 3,
        }}
      >
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Compose;
