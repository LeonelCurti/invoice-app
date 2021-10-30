import React from "react";
import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const calculateOrderTotal = (itemList) => {
  return itemList
    .reduce((accum, item) => accum + item.qty * item.price, 0)
    .toFixed(2);
};

const ItemsList = ({ invoiceItems }) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card
      sx={{
        // paddingX: 3,
        marginY: 3,
        backgroundColor: "background.light",        
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
              {invoiceItems.map((item) => (
                <TableRow key={item.name}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.qty}</TableCell>
                  <TableCell align="right">£ {item.price}</TableCell>
                  <TableCell align="right">£ {item.price * item.qty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ padding: { xs: 2, sm: 4 } }}>
          {invoiceItems.map((item) => (
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
          color:'common.white',
          padding: 3,
        }}
      >
        <Typography>Amount Due</Typography>
        <Typography variant="h6">
          <span>£ </span>
          {calculateOrderTotal(invoiceItems)}
        </Typography>
      </Box>
    </Card>
  );
};

export default ItemsList;
