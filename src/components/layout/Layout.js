import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Box from "@mui/material/Box";

const Layout = (props) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Topbar />
      <Sidebar />
      <Box sx={{ height: "100%", flexGrow: 1 }}>{props.children}</Box>
    </Box>
  );
};

export default Layout;
