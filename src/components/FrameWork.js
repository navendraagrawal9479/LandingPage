import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Stack } from "@mui/system";
import SideContent from "./SideContent";

const FrameWork = () => {
  return (
    <Box bgcolor="#213F5A" sx={{ margin: "10px 0" }}>
      <Typography
        variant="h2"
        fontWeight={1000}
        style={{ margin: "30px 20px", fontWeight: "bold" }}
      >
        AI <span style={{ color: "#0070E7" }}>framework</span>
      </Typography>
      <Stack
        sx={{ margin: "20px" }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap='wrap'
      >
        <SideContent />
        <img
          src="./buttons/AI.png"
          alt="AI"
          style={{height:'500px',marginRight:'40px'}}
        />
      </Stack>
    </Box>
  );
};

export default FrameWork;
