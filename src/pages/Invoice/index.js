import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { Container } from "@mui/material";
import SideDrawer from "../../components/SideDrawer";
import NavigationBack from "./NavigationBack";
import ActionsMenu from "./InvoiceActions";
import InvoiceDetail from "./InvoiceDetail";
import BillingInvoiceForm from "../../components/BillingInvoiceForm";
import demoData from "../Invoices/data";

const Invoice = () => {
  const { invoiceId } = useParams();
  const [open, setOpen] = React.useState(false);
  const invoiceFound = demoData.find((invoice) => invoice.id === invoiceId);

  return (
    <Layout>
      <Container maxWidth="md">
        <NavigationBack />
        <ActionsMenu
          invoiceStatus={invoiceFound.status}
          onEditInvoice={() => setOpen(true)}
          // onDeleteInvoice
          // onMarkAsPaidInvoice
        />
        <InvoiceDetail invoice={invoiceFound} />
      </Container>
      <SideDrawer open={open} onClose={() => setOpen(false)}>
        <BillingInvoiceForm
          title="Edit"
          invoice={invoiceFound}
          onClose={() => setOpen(false)}
        />
      </SideDrawer>
    </Layout>
  );
};

export default Invoice;
