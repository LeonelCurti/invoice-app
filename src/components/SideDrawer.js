import React from "react";
import Drawer from "@mui/material/Drawer";

const SideDrawer = ({ open, onClose, children }) => {
  return (
    <Drawer
      anchor="left"
      transitionDuration={{ enter: 500, exit: 500 }}
      open={open}
      onClose={onClose}
      sx={{
        marginLeft: { xs: 0, md: 8 },
        zIndex: 1000,
        "& .MuiBackdrop-root": {
          marginLeft: { xs: 0, md: 8 },
        },
        "& .MuiPaper-root": {
          width: { xs: "100%", sm: "80%", md: "70%" },
          backgroundColor: "background.default",
          marginLeft: { xs: 0, md: 8 },
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default SideDrawer;
