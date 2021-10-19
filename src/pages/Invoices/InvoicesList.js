import React from "react";
import { Box } from "@mui/material";
import InvoiceItem from "./InvoiceItem";

const InvoicesList = ({ invoices }) => {
  return invoices.map((invoice, i) => (
    <Box
      key={i}
      sx={{
        "&:not(:last-child)": {
          marginBottom: 2,
        },
      }}
    >
      <InvoiceItem invoice={invoice} />
    </Box>
  ));
};

export default InvoicesList;
