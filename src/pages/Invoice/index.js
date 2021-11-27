import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import Layout from "../../components/layout/Layout";
import NavigationBack from "./NavigationBack";
import Header from "./Header";
import InvoiceDetail from "./InvoiceDetail";
import EditInvoiceForm from "./EditInvoiceForm";
import invoices from "../../data/invoices.json";

const Invoice = () => {
  const { invoiceId } = useParams();
  const [open, setOpen] = React.useState(false);
  const invoiceFound = invoices.find((invoice) => invoice.id === invoiceId); 
  
 const handleClose = () => setOpen(false)

  return (
    <Layout>
      <Container maxWidth="md">
        <NavigationBack />
        <Header
          status={invoiceFound.status}
          onEdit={() => setOpen(true)}
          onDelete={() => {}}
          onMarkAsPaid={() => {}}
          onMarkAsPending={() => {}}
        />
        <InvoiceDetail invoice={invoiceFound} />
      </Container>
      <EditInvoiceForm
        open={open}
        invoice={invoiceFound}
        onClose={handleClose}
      />
    </Layout>
  );
};

export default Invoice;
