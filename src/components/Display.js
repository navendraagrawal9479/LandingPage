import React from "react";
import { Stack } from "@mui/system";
import { Box, Typography } from "@material-ui/core";

const Display = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        width: "70%",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h2" style={{margin:'1rem',fontWeight:'bold'}}>
          Grow your Business with Email Automation
        </Typography>
        <img
          src="./buttons/displayimg.png"
          alt="display"
          style={{ width: "750px" }}
        />
        <button className="bn" style={{padding:'1rem 2rem',fontSize:'1rem'}}>
            Get Started
        </button>
      </Stack>
    </Box>
  );
};

export default Display;
