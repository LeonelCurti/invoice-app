import React from "react";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";
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
      <TopBar />
      <Sidebar />
      <Box sx={{ height: "100%", flexGrow: 1 }}>{props.children}</Box>
    </Box>
  );
};

export default Layout;
