import React from "react";
import { AppBar, IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Divider from "@mui/material/Divider";
import {ColorModeContext} from "../../context/theme.context";
const Topbar = () => {
  const { colorMode } = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "block", md: "none" },
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "background.topMenu" }}>
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
              backgroundColor: "primary.dark",
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
              onClick={colorMode.toggleColorMode}
              sx={{ padding: 2 }}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <Divider orientation="vertical" />
            <IconButton size="small" color="inherit" sx={{ padding: 2 }}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Topbar;
