import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const NavBack = () => {
  let history = useHistory();
  const handleViewInvoices = () => {
    history.push("/invoices");
  };

  return (
    <Box
      sx={{
        backgroundColor: "backgroundInvoicePage.main",
        height: "100%",
        paddingTop: "1em",
        paddingBottom: "1em",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", paddingBottom: 1 }}>
        <Button
          variant="text"
          color="inherit"
          onClick={handleViewInvoices}
          startIcon={<KeyboardArrowLeftIcon />}
          sx={{ textTransform: "none" }}
        >
          Go back
        </Button>
      </Box>
    </Box>
  );
};

export default NavBack;
