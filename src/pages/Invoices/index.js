import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import demoData from "./data";
import TopMenu from "./TopMenu";
import InvoiceCard from "./InvoiceCard";
import Layout from "../../components/Layout";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#151826",
    height: "100%",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
  },
  cardContainer: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function Test() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Container maxWidth="md">
          <TopMenu />
          <Box mt={3}>
            {demoData.map((invoice, i) => (
              <div key={i} className={classes.cardContainer}>
                <InvoiceCard invoice={invoice} />
              </div>
            ))}
          </Box>
        </Container>
      </div>
    </Layout>
  );
}
