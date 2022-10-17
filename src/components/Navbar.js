import React from "react";
import { Box, Button } from "@material-ui/core";
import { Stack } from "@mui/system";

const Navbar = () => {
  return (
    <Box bgcolor='#E0ECFF'>
      <Box
        sx={{ bgcolor: "#171A21", padding: "10px" }}
        marginLeft="auto"
        marginRight={0}
        display='flex'
        justifyContent='flex-end'
        maxHeight='6vh'
      >
        <Stack direction="row">
          <Button>
            <img src="./buttons/Github.png" alt="Github button" />
          </Button>
          <Button>
            <img src="./buttons/Docs.png" alt="Docs button" />
          </Button>
          <Button>
            <img src="./buttons/SignIn.png" alt="Sign In button" />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
