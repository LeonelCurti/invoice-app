import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { Container } from "@mui/material";
import NavBack from "./NavBack";
import ActionsMenu from "./ActionsMenu";
import InvoiceDetail from "./InvoiceDetail";
import demoData from "../Invoices/data";

const Invoice = () => {
  const { invoiceId } = useParams();
  const invoiceFound = demoData.find((invoice) => invoice.id === invoiceId);

  return (
    <Layout>
      <Container maxWidth="md">
        <NavBack />
        <ActionsMenu invoiceStatus={invoiceFound.status} />
        <InvoiceDetail invoice={invoiceFound} />
      </Container>
    </Layout>
  );
};

export default Invoice;
