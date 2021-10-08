import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { Container } from "@mui/material";
import SideDrawer from "../../components/SideDrawer";
import NavBack from "./NavBack";
import ActionsMenu from "./ActionsMenu";
import InvoiceDetail from "./InvoiceDetail";
import demoData from "../Invoices/data";

const Invoice = () => {
  const { invoiceId } = useParams();
  const [open, setOpen] = React.useState(false);
  const invoiceFound = demoData.find((invoice) => invoice.id === invoiceId);

  return (
    <Layout>
      <Container maxWidth="md">
        <NavBack />
        <ActionsMenu
          invoiceStatus={invoiceFound.status}
          onEditInvoice={() => setOpen(true)}
        />
        <InvoiceDetail invoice={invoiceFound} />
      </Container>
      <SideDrawer open={open} onClose={() => setOpen(false)}>
        test
      </SideDrawer>
    </Layout>
  );
};

export default Invoice;
