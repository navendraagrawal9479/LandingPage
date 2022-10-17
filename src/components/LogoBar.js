import React from "react";
import { Box } from "@mui/system";

const LogoBar = () => {
  return (
    <Box
      bgcolor="#0B0E15"
      sx={{ margin: "0px 20px",display:'flex',justifyContent:'space-between' }}
    >
      <img src="./buttons/logo.png" alt="logo" />
      <button className="bn">
        Talk to us
      </button>
    </Box>
  );
};

export default LogoBar;
