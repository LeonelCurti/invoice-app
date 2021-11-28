import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoicesContext } from "../../context/invoice.context";
import { Container } from "@mui/material";

import Layout from "../../components/layout/Layout";
import NavigationBack from "./NavigationBack";
import Header from "./Header";
import InvoiceDetail from "./InvoiceDetail";
import EditInvoiceForm from "./EditInvoiceForm";

const Invoice = () => {
  const invoices = useContext(InvoicesContext);
  const { invoiceId } = useParams();
  const [open, setOpen] = useState(false);
  const [invoiceSelected, setinvoiceSelected] = useState(null);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const invoice = invoices.find((invoice) => invoice.id === invoiceId);
    setinvoiceSelected(invoice);
  }, [invoices, invoiceId]);

  return (
    <Layout>
      {invoiceSelected ? (
        <>
          <Container maxWidth="md">
            <NavigationBack />

            <Header invoice={invoiceSelected} onEdit={handleOpen} />
            <InvoiceDetail invoice={invoiceSelected} />
          </Container>
          <EditInvoiceForm
            open={open}
            invoice={invoiceSelected}
            onClose={handleClose}
          />
        </>
      ) : (
        "loading..."
      )}
    </Layout>
  );
};

export default Invoice;
