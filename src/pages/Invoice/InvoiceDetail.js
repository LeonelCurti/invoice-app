import React from "react";
import { Box, Card, Typography } from "@mui/material";
import ItemsList from "./ItemsList";
import dayjs from "dayjs";

const InvoiceDetail = ({ invoice }) => {
  return (
    <Card
      sx={{
        height: "80%",
        borderRadius: "10px",
        marginY: 2,
        paddingY: 2,
        paddingX: { xs: 3, sm: 6 },
      }}
    >
      {/* invoice header */}
      <Box
        sx={{
          display: "flex",
          paddingBottom: 2,
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "flex-start", sm: "space-between" },
          alignItems: { xs: "flex-start", sm: "stretch" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: { xs: 3, sm: 0 },
          }}
        >
          <Typography variant="h6" gutterBottom>
            <span style={{ color: "#7986cb" }}>#</span>
            {invoice.id}
          </Typography>
          <Typography>{invoice.description}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", sm: "flex-end" },
          }}
        >
          <Typography>{invoice.originAddress.street}</Typography>
          <Typography>{invoice.originAddress.city}</Typography>
          <Typography>{invoice.originAddress.postCode}</Typography>
          <Typography>{invoice.originAddress.city}</Typography>
        </Box>
      </Box>
      {/* invoice info */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: 2,
          flexWrap: "wrap",
        }}
      >
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography variant="body2" gutterBottom>
              Invoice Date
            </Typography>
            <Typography variant="h6">
              {dayjs(invoice.createdAt).format("DD MMM YYYY")}
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" gutterBottom>
              Payment Due
            </Typography>
            <Typography variant="h6">
              {dayjs(invoice.paymentDue).format("DD MMM YYYY")}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="body2" gutterBottom>
            Bill To
          </Typography>
          <Typography gutterBottom variant="h6">
            {invoice.client.name}
          </Typography>
          <Typography>{invoice.client.street}</Typography>
          <Typography>{invoice.client.city}</Typography>
          <Typography>{invoice.client.postCode}</Typography>
          <Typography>{invoice.client.country}</Typography>
        </Box>
        <Box
          sx={{
            paddingRight: { xs: 0, md: 6 },
            marginY: { xs: 1, sm: 0 },
          }}
        >
          <Typography variant="body2" gutterBottom>
            Sent to
          </Typography>
          <Typography variant="h6">{invoice.client.email}</Typography>
        </Box>
      </Box>

      <ItemsList invoiceItems={invoice.items} />
    </Card>
  );
};

export default InvoiceDetail;
