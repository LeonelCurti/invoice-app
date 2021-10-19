import React from "react";
import { Container, Box } from "@mui/material";
import demoData from "./data";
import Header from "./Header";
import InvoiceList from "./InvoicesList";
import Layout from "../../components/layout/Layout";
import CreateInvoiceForm from "./CreateInvoiceForm";

const Invoices = () => {
  const [open, setOpen] = React.useState(false);
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
          <Header onOpenForm={() => setOpen(true)} />
          <Box mt={3}>
            <InvoiceList invoices={demoData} />
          </Box>
        </Container>
      </Box>
      <CreateInvoiceForm
        open={open}
        onSaveAsPending={() => setOpen(false)}
        onSaveAsDraft={() => setOpen(false)}
        onDiscard={() => setOpen(false)}
      />
    </Layout>
  );
};
export default Invoices;
