import React from "react";
import { Box, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { reduceErrors } from "./../../utils";
import {
  CancelButtonStyle,
  ButtonStyle,
} from "../../components/shared/Buttons";
const EditInvoiceActions = (props) => {
  const { onCancel, onSaveChanges } = props;
  const formik = useFormikContext();
  return (
    <>
      <Box py={1}>
        {formik.submitCount > 0 &&
          formik.errors &&
          reduceErrors(formik.errors).map((item, index) => (
            <Typography color="error" key={index}>
              {item}
            </Typography>
          ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "flex-end",
          paddingY: 1,
          gap: 3,
        }}
      >
        <CancelButtonStyle sx={{ order: { xs: 2, sm: 1 } }} onClick={onCancel}>
          Cancel
        </CancelButtonStyle>
        <ButtonStyle sx={{ order: { xs: 1, sm: 2 } }} onClick={onSaveChanges}>
          Save Changes
        </ButtonStyle>
      </Box>
    </>
  );
};

export default EditInvoiceActions;
