import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const SideDrawer = ({ open, onClose, children }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        marginLeft: { xs: 0, md: 8 },
        zIndex: 1000,
        "& .MuiBackdrop-root": {
          marginLeft: { xs: 0, md: 8 },
        },
        "& .MuiPaper-root": {
          backgroundColor: "#151826",
          marginLeft: { xs: 0, md: 8 },
        },
      }}
    >
      <Box
        sx={{ width: { xs: "100vw", sm: "70vw", md: "60vw" } }}
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
