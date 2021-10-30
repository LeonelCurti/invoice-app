import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import ColorModeContext from "../../context/ThemeContext";
const drawerWidth = 64;

const Sidebar = () => {
  const { colorMode } = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        display: { xs: "none", md: "block" },
        width: drawerWidth,
        backgroundColor:'background.default',        
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
          backgroundColor: "background.sideMenu",
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
            onClick={colorMode.toggleColorMode}
            sx={{ marginY: 1, color: "common.white" }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <Divider width="100%" />
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            sx={{ marginY: 1, color: "common.white" }}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
