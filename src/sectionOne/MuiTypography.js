import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      {/*
       => Typography : present your design and content as clearly and efficiently as possible
       ==> variant : Used to define html tag.
       ==> Additional CSS Properties : fontWeight,margin,etc
       */}
      <Typography
        variant="h4"
        sx={{
          color: "red",
        }}
      >
        Hello, world
      </Typography>
    </div>
  );
};

export default MuiTypography;
