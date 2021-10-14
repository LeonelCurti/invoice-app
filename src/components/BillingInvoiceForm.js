import React from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import BilligInfoForm from "./BillingInfoForm";
import BilligItemsTable from "./BillingItemsTable";
import BillingActions from "./BillingActions";

const ButtonStyle = styled(Button)(() => ({
  textTransform: "none",
  borderRadius: "20px",
  fontSize: { xs: 16, sm: 15 },
  "& .MuiSvgIcon-root": {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "primary.main",
  },
}));

const Subtitle = (props) => (
  <Typography color="primary" variant="subtitle2" gutterBottom mt={3} mb={2}>
    {props.title}
  </Typography>
);

const BillingInvoiceForm = ({ title, invoice, onClose }) => {
  return (
    <Box display="flex" flexDirection="column" px={4} pt={3} pb={1}>
      <Typography variant="h6" gutterBottom>
        {title}
        <span style={{ color: "#7986cb" }}> #</span>
        {invoice.id}
      </Typography>

      <BilligInfoForm />
      <Subtitle title="Item List" />
      <BilligItemsTable items={invoice.items} />

      <ButtonStyle
        variant="contained"
        onClick={() => {}}
        disableElevation
        sx={{
          marginY: 2,
          width: "100%",
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "invoiceTableBg.main",
          },
        }}
      >
        + Add New Item
      </ButtonStyle>
      <BillingActions mode="newInvoice" onCancel={onClose} />
    </Box>
  );
};

export default BillingInvoiceForm;
