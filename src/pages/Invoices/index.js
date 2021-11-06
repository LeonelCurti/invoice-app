import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import demoInvoices from "./data";
import Header from "./Header";
import InvoiceList from "./InvoicesList";
import Layout from "../../components/layout/Layout";
import CreateInvoiceForm from "./CreateInvoiceForm";

const Invoices = () => {
  const [open, setOpen] = useState(false);
  const [invoiceFilter, setInvoiceFilter] = useState("all"); //all, draft, pending or paid
  
  const filteredInvoices = () =>
    invoiceFilter === "all"
      ? demoInvoices
      : demoInvoices.filter((invoice) => invoice.status === invoiceFilter);

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
          <Header
            filter={invoiceFilter}
            setFilter={setInvoiceFilter}
            onOpenForm={() => setOpen(true)}
          />
          <Box mt={3}>
            <InvoiceList invoices={filteredInvoices()} />
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
