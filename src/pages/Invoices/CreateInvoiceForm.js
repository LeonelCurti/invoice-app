import React, { useContext } from "react";
import { Formik } from "formik";
import { DispatchContext } from "../../context/invoice.context";
import {
  validationSchema,
  initialValues,
} from "../../components/form/validationSchema";
import CreateInvoiceActions from "./CreateInvoiceActions";
import { Box, Typography } from "@mui/material";
import SideDrawer from "../../components/SideDrawer";
import Fields from "../../components/form/Fields";
import ItemsTable from "../../components/form/ItemsTable";

const CreateInvoiceForm = ({ open, onClose }) => {
  const dispatch = useContext(DispatchContext);

  const onSaveAsPending = (values) => {
    //add invoice with validated fields with pending status
    dispatch({
      type: "ADD",
      payload: { ...values, status: "pending" },
    });
    onClose();
  };

  const onSaveAsDraft = (values) => {
    //add partial invoice with pending draft
    dispatch({
      type: "ADD",
      payload: { ...values, status: "draft" },
    });
    onClose();
  };

  return (
    <SideDrawer open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 3, sm: 4 },
          pt: 3,
          pb: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          New Invoice
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSaveAsPending(values);
          }}
        >
          {(formik) => (
            <>
              <Fields />
              <ItemsTable name="items" />
              <CreateInvoiceActions
                onDiscard={onClose}
                onSaveAsDraft={() => onSaveAsDraft(formik.values)}
                onSaveAsPending={formik.handleSubmit}
              />
            </>
          )}
        </Formik>
      </Box>
    </SideDrawer>
  );
};

export default CreateInvoiceForm;
