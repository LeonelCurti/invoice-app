import React from "react";
import { Box, Typography } from "@mui/material";
import SideDrawer from "../../components/SideDrawer";
import Fields from "../../components/form/Fields";
import ItemsTable from "../../components/form/ItemsTable";
import CreateInvoiceActions from "./CreateInvoiceActions";
import {
  validationSchema,
  initialValues,
} from "../../components/form/validationSchema";
import { Formik } from "formik";

const CreateInvoiceForm = ({ open, onClose }) => {
  const onSaveAsPending = (values) => {
    alert(JSON.stringify(values, null, 2));
    //add complete invoice to the list with pending status
  };

  const onSaveAsDraft = (values) => {
    alert(JSON.stringify(values.items, null, 2));
    //add incomplete invoice to the list
  };
  const onDiscard = () => {
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
                onDiscard={onDiscard}
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
