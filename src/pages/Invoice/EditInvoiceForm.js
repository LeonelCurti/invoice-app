import React from "react";
import { Box, Typography } from "@mui/material";
import SideDrawer from "../../components/SideDrawer";
import Fields from "../../components/form/Fields";
import ItemsTable from "../../components/form/ItemsTable";
import { ButtonStyle } from "../../components/shared/Buttons";

const EditInvoiceForm = ({ invoice, open, onCancel }) => {
  return (
    <SideDrawer open={open} onClose={onCancel}>
      <Box display="flex" flexDirection="column" px={4} pt={3} pb={1}>
        <Typography variant="h6" gutterBottom>
          Edit<span style={{ color: "#7986cb" }}> #</span>
          {invoice.id}
        </Typography>
        <Fields />
        <ItemsTable items={invoice.items} />
        <ButtonStyle
          onClick={() => {}}
          sx={{
            marginY: 2,
            backgroundColor: "background.paper",
          }}
        >
          + Add New Item
        </ButtonStyle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingY: 1,
            gap: 3,
          }}
        >
          <ButtonStyle
            sx={{
              backgroundColor: "background.light",             
              "&:hover": {
                // border:'1px solid red',
                backgroundColor: "primary.dark",
              },
            }}
            onClick={onCancel}
          >
            Cancel
          </ButtonStyle>
          <ButtonStyle>Save Changes</ButtonStyle>
        </Box>
      </Box>
    </SideDrawer>
  );
};

export default EditInvoiceForm;
