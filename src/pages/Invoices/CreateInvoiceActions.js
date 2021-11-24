import React from "react";
import {
  ButtonStyle,
  CancelButtonStyle,
} from "../../components/shared/Buttons";
import { useFormikContext } from "formik";
import { Box, Typography } from "@mui/material";
import { reduceErrors } from "./../../utils";

const CreateInvoiceActions = (props) => {
  const { onDiscard, onSaveAsDraft, onSaveAsPending } = props;
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
          paddingY: 1,
        }}
      >
        <Box
          sx={{
            order: { xs: 2, sm: 1 },
            flexGrow: { xs: 0, sm: 1 },
            marginTop: { xs: 2, sm: 0 },
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
          <CancelButtonStyle
            sx={{ width: { xs: "100%", sm: "auto" } }}
            onClick={onDiscard}
          >
            Discard
          </CancelButtonStyle>
        </Box>
        <Box
          sx={{
            display: "flex",
            order: { xs: 1, sm: 2 },
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <ButtonStyle onClick={onSaveAsDraft}>Save As Draft</ButtonStyle>
          <ButtonStyle onClick={onSaveAsPending}>Save {"&"} Send</ButtonStyle>
        </Box>
      </Box>
    </>
  );
};

export default CreateInvoiceActions;
