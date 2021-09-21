import React, { useState } from "react";
// import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100%",
    // paddingTop: 56,
    // [theme.breakpoints.up("sm")]: {
    //   paddingTop: 64,
    // },
  },
  content: {
    // height: "100%",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
  return (
    <div className={classes.root}>
      <TopBar />

      <Sidebar />
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

export default Layout