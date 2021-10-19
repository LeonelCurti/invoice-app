import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { Container } from "@mui/material";

import NavigationBack from "./NavigationBack";
import Header from "./Header";
import InvoiceDetail from "./InvoiceDetail";
import EditInvoiceForm from "./EditInvoiceForm";
import demoData from "../Invoices/data";

const Invoice = () => {
  const { invoiceId } = useParams();
  const [open, setOpen] = React.useState(false);
  const invoiceFound = demoData.find((invoice) => invoice.id === invoiceId);

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
        onCancel={() => setOpen(false)}
      />
    </Layout>
  );
};

export default Invoice;
