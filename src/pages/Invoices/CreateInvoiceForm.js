import React from "react";
import { Box, Typography } from "@mui/material";
import SideDrawer from "../../components/SideDrawer";
import Fields from "../../components/form/Fields";
import ItemsTable from "../../components/form/ItemsTable";
import {
  ButtonStyle,
  CancelButtonStyle,
} from "../../components/shared/Buttons";

const CreateInvoiceForm = ({
  open,
  onSaveAsDraft,
  onSaveAsPending,
  onDiscard,
}) => {
  const [items, setItems] = React.useState([]);
  return (
    <SideDrawer open={open} onClose={onDiscard}>
      <Box display="flex" flexDirection="column" px={4} pt={3} pb={1}>
        <Typography variant="h6" gutterBottom>
          New Invoice
        </Typography>

        <Fields />

        <ItemsTable items={items} />

        <ButtonStyle
          onClick={() => {}}
          sx={{
            marginY: 2,
            backgroundColor: "background.paper",
            "&:hover": {
              backgroundColor: "background.light",
            },
          }}
        >
          + Add New Item
        </ButtonStyle>
        <Box
          sx={{
            display: "flex",
            paddingY: 1,
          }}
        >
          <Box flexGrow={1}>
            <CancelButtonStyle onClick={onDiscard}>Discard</CancelButtonStyle>
          </Box>
          <Box display="flex" gap={2}>
            <ButtonStyle onClick={onSaveAsDraft}>Save As Draft</ButtonStyle>
            <ButtonStyle onClick={onSaveAsPending}>Save {"&"} Send</ButtonStyle>
          </Box>
        </Box>
      </Box>
    </SideDrawer>
  );
};

export default CreateInvoiceForm;
