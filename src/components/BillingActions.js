import React from "react";
import { Box, styled, Button } from "@mui/material";
const ButtonStyle = styled(Button)(() => ({
  textTransform: "none",
  borderRadius: "20px",
  fontSize: { xs: 16, sm: 15 },
  "& .MuiSvgIcon-root": {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "primary.main",
  },
}));

const BillingActions = ({ mode, onSaveAsDraft, onSaveAsPending, onCancel }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        paddingY: 1,
        /////////////////////
        // paddingX: 3,
        // backgroundColor: "background.paper",
        // position: "sticky",
        // bottom: 0,
        /////////////////////
      }}
    >
      <ButtonStyle
        variant="contained"
        onClick={onCancel}
        disableElevation
        sx={{
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "invoiceTableBg.light",
          },
        }}
      >
        {mode === "editInvoice" ? "Cancel" : "Discard"}
      </ButtonStyle>
      <ButtonStyle
        sx={{ ml: 3 }}
        variant="contained"
        color="primary"
        disableElevation
      >
        {mode === "editInvoice" ? "Save Changes" : "Save As Draft"}
      
      </ButtonStyle>
      {
        mode==='newInvoice'&&(
          <ButtonStyle
        sx={{ ml: 3 }}
        variant="contained"
        color="primary"
        disableElevation
      >        
        Save {'&'} Send
      </ButtonStyle>
        )
      }
    </Box>
  );
};

export default BillingActions;
