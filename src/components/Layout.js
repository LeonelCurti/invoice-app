import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Box from "@mui/material/Box";



const Layout = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <TopBar />
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
    </Box>
  );
};

export default Layout;
