import React, { useState, useContext } from "react";
import { Container, Box } from "@mui/material";
import Header from "./Header";
import InvoiceList from "./InvoicesList";
import Layout from "../../components/layout/Layout";
import CreateInvoiceForm from "./CreateInvoiceForm";
import { InvoicesContext } from "../../context/invoice.context";

const Invoices = () => {
  const invoices = useContext(InvoicesContext);
  const [open, setOpen] = useState(false);
  const [filter, setfilter] = useState("all"); //all, draft, pending or paid

  const filteredInvoices =
    filter === "all"
      ? invoices
      : invoices.filter((invoice) => invoice.status === filter);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            filter={filter}
            invoicesLength={filteredInvoices.length}
            setFilter={setfilter}
            onOpenForm={handleOpen}
          />
          <Box mt={3}>
            <InvoiceList invoices={filteredInvoices} />
          </Box>
        </Container>
      </Box>
      <CreateInvoiceForm open={open} onClose={handleClose} />
    </Layout>
  );
};
export default Invoices;
