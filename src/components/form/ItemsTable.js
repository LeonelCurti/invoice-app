import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextFieldStyle } from "./TextFieldStyle";
const BillingItemsTable = ({ items }) => {
  return (
    <React.Fragment>
      <Typography
        color="primary"
        variant="subtitle2"
        gutterBottom
        mt={3}
        mb={2}
      >
        Item List
      </Typography>
      <TableContainer>
        <Table
          sx={{
            minWidth: 400,
            "& .MuiTableCell-root": {
              // padding: 1,
              borderBottom: "none",
            },
            "& .MuiInputBase-input": {
              marginTop: 0,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <TextFieldStyle
                    id="standard-helperText"
                    hiddenLabel
                    defaultValue={item.name}
                    sx={{ minWidth: "180px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextFieldStyle
                    id="standard-helperText"
                    hiddenLabel
                    defaultValue={item.qty}
                    sx={{ minWidth: "50px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextFieldStyle
                    id="standard-helperText"
                    hiddenLabel
                    defaultValue={item.price.toFixed(2)}
                    sx={{ width: "85px" }}
                  />
                </TableCell>
                <TableCell>{(item.price * item.qty).toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton size="small" color="inherit">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default BillingItemsTable;
