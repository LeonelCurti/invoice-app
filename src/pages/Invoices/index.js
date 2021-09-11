import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import demoData from "./data";
import Header from "./Header";
import Main from "./Main";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#151826",
    height: "100vh",
    paddingTop: "1.5em",
  },
}));

export default function Test() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Header />
        <Main invoices={demoData}/>
      </Container>
    </div>
  );
}
