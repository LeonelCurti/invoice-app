import React, { useContext } from "react";
import { Formik } from "formik";
import { DispatchContext } from "../../context/invoice.context";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideDrawer from "../../components/SideDrawer";
import Fields from "../../components/form/Fields";
import ItemsTable from "../../components/form/ItemsTable";
import EditInvoiceActions from "./EditInvoiceActions";
import {
  validationSchema,
  initialValues,
} from "../../components/form/validationSchema";
import dayjs from "dayjs";
const EditInvoiceForm = ({ invoice, open, onClose }) => {
  const dispatch = useContext(DispatchContext);
  const onSaveChanges = (values) => {
    values.createdAt = dayjs(values.createdAt).format("YYYY-MM-DD");
    values.paymentDue = dayjs(values.createdAt)
      .add(Number(values.paymentTerms), "day")
      .format("YYYY-MM-DD");
    dispatch({ type: "EDIT", id: invoice.id, payload: values });
    onClose();
  };
  const onCancel = () => {
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
          Edit<span style={{ color: "#7986cb" }}> #</span>
          {invoice.id}
        </Typography>

        <Formik
          initialValues={{ ...initialValues, ...invoice }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSaveChanges(values);
          }}
        >
          {(formik) => (
            <>
              <Fields />
              <ItemsTable name="items" />
              <EditInvoiceActions
                onCancel={onCancel}
                onSaveChanges={formik.handleSubmit}
              />
            </>
          )}
        </Formik>
      </Box>
    </SideDrawer>
  );
};

export default EditInvoiceForm;
