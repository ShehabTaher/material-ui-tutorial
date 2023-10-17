import React from "react";
import { Button } from "@mui/material";
const MuiButton = () => {
  return (
    <div>
      {/*
       => Buttons : allow users to take actions, and make choices, with a single tap.
       ==> variant : styles like outline, contained
      ==> Additional Properties : onClick,type,sx,etc
       */}
      <Button
        onClick={() => alert("button Clicked")}
        color="success"
        sx={{ margin: 3 }}
        size="large"
        variant="contained"
      >
        Hello
      </Button>
      <Button color="error" sx={{ margin: 3 }} size="medium" variant="outlined">
        Hello
      </Button>
      <Button color="info" sx={{ margin: 3 }} size="small" variant="text">
        Hello
      </Button>
    </div>
  );
};

export default MuiButton;
