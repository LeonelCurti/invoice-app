import React from "react";
import { Container, Box } from "@mui/material";
import demoData from "./data";
import TopMenu from "./TopMenu";
import InvoiceCard from "./InvoiceCard";
import Layout from "../../components/Layout";


export default function Test() {

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "backgroundInvoicePage.main",
          height: "100%",
          paddingTop: "1.5em",
          paddingBottom: "1.5em",
        }}
      >
        <Container maxWidth="md">
          <TopMenu />
          <Box mt={3}>
            {demoData.map((invoice, i) => (
              <Box
                key={i}
                sx={{
                  "&:not(:last-child)": {
                    marginBottom: 2,
                  },
                }}
              >
                <InvoiceCard invoice={invoice} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
