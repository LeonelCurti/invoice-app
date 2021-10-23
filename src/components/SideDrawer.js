import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

const SideDrawer = ({ open, onClose, children }) => {
  return (
    <Drawer
      anchor="left"
      transitionDuration={{ enter: 600, exit: 500 }}
      open={open}
      onClose={onClose}
      sx={{
        marginLeft: { xs: 0, md: 8 },
        zIndex: 1000,
        "& .MuiBackdrop-root": {
          marginLeft: { xs: 0, md: 8 },
        },
        "& .MuiPaper-root": {
          backgroundColor: "background.default",
          marginLeft: { xs: 0, md: 8 },
        },
      }}
    >
      <Box
        sx={{ height: "100%", width: { xs: "100vw", sm: "80vw", md: "70vw" } }}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
