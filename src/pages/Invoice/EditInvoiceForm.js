import React from "react";
import { Box, Typography } from "@mui/material";
import SideDrawer from "../../components/SideDrawer";
import Fields from "../../components/form/Fields";
import ItemsTable from "../../components/form/ItemsTable";
import {
  CancelButtonStyle,
  ButtonStyle,
} from "../../components/shared/Buttons";

const EditInvoiceForm = ({ invoice, open, onCancel }) => {
  return (
    <SideDrawer open={open} onClose={onCancel}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 3, sm: 4 },
          pt: 3,
          pb: 1,
        }} 
      >
        <Typography variant="h6" gutterBottom>
          Edit<span style={{ color: "#7986cb" }}> #</span>
          {invoice.id}
        </Typography>
        <Fields />
        <ItemsTable items={invoice.items} />
        <ButtonStyle
          onClick={() => {}}
          sx={{
            marginY: 3,
            backgroundColor: "background.paper",
          }}
        >
          + Add New Item
        </ButtonStyle>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-end",
            paddingY: 1,
            gap: 3,
          }}
        >
          <CancelButtonStyle
            sx={{ order: { xs: 2, sm: 1 } }}
            onClick={onCancel}
          >
            Cancel
          </CancelButtonStyle>
          <ButtonStyle sx={{ order: { xs: 1, sm: 2 } }}>
            Save Changes
          </ButtonStyle>
        </Box>
      </Box>
    </SideDrawer>
  );
};

export default EditInvoiceForm;
