import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@material-ui/core";

const Content = (props) => {
  return (
    <Stack
      direction="row"
      sx={{ color: "#fff", fontSize: "20px", marginRight: "50px" }}
      gap={2}
    >
      <div className="vl"></div>
      <Stack gap={1} direcrtion="column">
        <Typography style={{ fontWeight: "bold" }}>{props.heading}</Typography>
        <Typography variant="h6" style={{ fontFamily: "'Inter', sans-serif" }}>
          {props.body}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Content;
