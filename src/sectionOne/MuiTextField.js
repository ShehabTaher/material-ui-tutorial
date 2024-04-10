import React, { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
const MuiTextField = () => {
  return (
    <div>
      {/*
       => Textfield : Text Fields let users enter and edit text.
       ==> variant : Styles
       ==> Additional Properties : onChange,type
       */}

      <TextField
        type="text"
        sx={{ margin: 3 }}
        placeholder="Name"
        variant="outlined"
      />
      <TextField
        type="email"
        sx={{ margin: 3 }}
        placeholder="Email"
        variant="standard"
      />
      <TextField
        type="password"
        sx={{ margin: 3 }}
        placeholder="Password"
        variant="filled"
      />
    </div>
  );
};

export default MuiTextField;
