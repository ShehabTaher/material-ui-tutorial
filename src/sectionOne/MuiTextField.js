import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
const MuiTextField = () => {
  const [name, setName] = useState(" ");
  return (
    <div>
      {/*
       => Textfield : Text Fields let users enter and edit text.
       ==> variant : Styles
       ==> Additional Properties : onChange,type
       */}
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <Typography>{name}</Typography>
    </div>
  );
};

export default MuiTextField;
