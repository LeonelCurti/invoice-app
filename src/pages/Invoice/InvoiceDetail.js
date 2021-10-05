import React from "react";
import {
  Box,
  Card,
  Button,
  CardHeader,
  CardActionArea,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const calculateOrderTotal = (itemList) => {
  return itemList
    .reduce((accum, item) => accum + item.qty * item.price, 0)
    .toFixed(2);
};

const InvoiceDetail = ({ invoice }) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card
      sx={{
        // display: { xs: "block", sm: "flex" },
        borderRadius: "10px",
        // alignItems: "center",
        marginY: 2,
        paddingY: 2,
        paddingX: { xs: 3, sm: 6 },
      }}
    >
      {/* first text */}
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
          <Typography>19 Inion Terrace</Typography>
          <Typography>London</Typography>
          <Typography>EI3EZ</Typography>
          <Typography>United Kindom</Typography>
        </Box>
      </Box>
      {/* second text */}
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
            <Typography variant="h6">{invoice.date}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" gutterBottom>
              Payment Due
            </Typography>
            <Typography variant="h6">{invoice.date}</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="body2" gutterBottom>
            Bill To
          </Typography>
          <Typography gutterBottom variant="h6">
            {invoice.client.name}
          </Typography>
          <Typography>{invoice.client.address}</Typography>
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
      {/* table */}

      <Card
        sx={{
          // paddingX: 3,
          marginY: 3,
          backgroundColor: "invoiceTableBg.main",
        }}
      >
        {matchesSm ? (
          <TableContainer
            sx={{
              padding: { xs: 0, sm: 2, md: 3 },
            }}
          >
            <Table
              sx={{
                // minWidth: 60,
                "& .MuiTableCell-root": { borderBottom: "none" },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell align="right">QTY</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoice.items.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.qty}</TableCell>
                    <TableCell align="right">£ {item.price}</TableCell>
                    <TableCell align="right">
                      £ {item.price * item.qty}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box sx={{ padding: { xs: 2, sm: 4 } }}>
            {invoice.items.map((item) => (
              <Box
                key={item.name}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.qty} x £ {item.price}
                  </Typography>
                </Box>
                <Typography sx={{ alignSelf: "center" }}>
                  £ {item.price * item.qty}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <Typography>Amount Due</Typography>
          <Typography variant="h6">
            <span>£ </span>
            {calculateOrderTotal(invoice.items)}
          </Typography>
        </Box>
      </Card>
    </Card>
  );
};

export default InvoiceDetail;
