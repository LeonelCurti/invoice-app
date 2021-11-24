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
import { ButtonStyle } from "../../components/shared/Buttons";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextFieldStyle } from "./TextFieldStyle";
import { useFormikContext, FieldArray, getIn } from "formik";

const ItemsTable = ({ name }) => {
  const formik = useFormikContext();
  return (
    <React.Fragment>
      <Typography
        color="primary"
        variant="subtitle1"
        gutterBottom
        mt={3}
        mb={2}
      >
        Item List
      </Typography>

      <FieldArray
        name={name}
        render={(helpers) => (
          <>
            {formik.values.items && formik.values.items.length > 0 && (
              <TableContainer>
                <Table
                  sx={{
                    // minWidth: 400,
                    minHeight: 82,
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
                    {formik.values.items &&
                      formik.values.items.length > 0 &&
                      formik.values.items.map((item, index) => (
                        <TableRow key={index} index={index}>
                          <TableCell>
                            <TextFieldStyle
                              id="standard-helperText"
                              hiddenLabel
                              {...formik.getFieldProps(`items[${index}].name`)}
                              error={Boolean(
                                getIn(formik.touched, `items[${index}].name`) &&
                                  getIn(formik.errors, `items[${index}].name`)
                              )}
                              sx={{ minWidth: "180px" }}
                            />
                          </TableCell>
                          <TableCell>
                            <TextFieldStyle
                              id="standard-helperText"
                              hiddenLabel
                              {...formik.getFieldProps(`items[${index}].qty`)}
                              error={Boolean(
                                getIn(formik.touched, `items[${index}].qty`) &&
                                  getIn(formik.errors, `items[${index}].qty`)
                              )}
                              sx={{ minWidth: "50px" }}
                            />
                          </TableCell>
                          <TableCell>
                            <TextFieldStyle
                              id="standard-helperText"
                              hiddenLabel
                              {...formik.getFieldProps(`items[${index}].price`)}
                              error={Boolean(
                                getIn(
                                  formik.touched,
                                  `items[${index}].price`
                                ) &&
                                  getIn(formik.errors, `items[${index}].price`)
                              )}
                              sx={{ width: "85px" }}
                            />
                          </TableCell>
                          <TableCell>
                            {(item.price * item.qty).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              size="small"
                              color="inherit"
                              onClick={() => helpers.remove(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            <ButtonStyle
              onClick={() => helpers.push({ name: "", qty: "", price: "" })}
              sx={{ marginY: 2 }}
            >
              + Add New Item
            </ButtonStyle>
          </>
        )}
      />
    </React.Fragment>
  );
};

export default ItemsTable;
