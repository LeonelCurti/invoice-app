import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
const SideBar = ({ drawerWidth }) => {
  return (
    <Drawer
      sx={{
        display: { xs: "none", md: "block" },
        width: drawerWidth,
        flexShrink: 0,     
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",   
          borderStyle: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            borderBottomRightRadius: "18px",
            height: 60,
          }}
        >
          <Box
            sx={{
              height: "50%",
              marginTop: "50%",
              backgroundColor: "primary.light",
              borderTopLeftRadius: "18px",
              borderBottomRightRadius: "18px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            sx={{ marginY: 1 }}
          >
            <LightModeIcon />
          </IconButton>
          <Divider width="100%" />
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            sx={{ marginY: 1 }}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;
