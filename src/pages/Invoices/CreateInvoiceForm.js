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
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 3, sm: 4 },
          pt: 3,
          pb: 1,
        }}>
        <Typography variant="h5" gutterBottom>
          New Invoice
        </Typography>

        <Fields />

        <ItemsTable items={items} />

        <ButtonStyle
          onClick={() => {}}
          sx={{
            marginY: 2,
            // backgroundColor: "background.paper",
            // "&:hover": {
            //   backgroundColor: "background.light",
            // },
          }}
        >
          + Add New Item
        </ButtonStyle>
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
      </Box>
    </SideDrawer>
  );
};

export default CreateInvoiceForm;
