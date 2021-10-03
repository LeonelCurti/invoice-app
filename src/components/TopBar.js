import React from "react";
import { AppBar, IconButton, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import Divider from "@mui/material/Divider";
const TopBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "block", md: "none" },
      }}
    >
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              backgroundColor: "primary.main",
              borderBottomRightRadius: "15px",
              borderTopRightRadius: "15px",
              width: 60,
            }}
          >
            <Box
              sx={{
                height: "50%",
                backgroundColor: "primary.light",
                borderTopLeftRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              "& .MuiIconButton-root:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: 2 }}
            >
              <LightModeIcon />
            </IconButton>
            <Divider orientation="vertical" />
            <IconButton           
              size="small"            
              color="inherit"
              sx={{ padding: 2 }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default TopBar;
