import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import { Container, Box, Typography, IconButton, Button } from "@mui/material";
import ActionsMenu from "./ActionsMenu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const Invoice = () => {
  let history = useHistory();

  const handleViewInvoices = () => {
    history.push("/invoices");
  };
  const { invoiceId } = useParams();
  return (
    <Layout>
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "backgroundInvoicePage.main",
            height: "100%",
            paddingTop: "1em",
            paddingBottom: "1em",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", paddingBottom:1}}>
            <Button              
              variant="text"
              color="inherit"
              onClick={handleViewInvoices}
              startIcon={<KeyboardArrowLeftIcon />}
              sx={{textTransform:'none'}}
            >
              Go back
            </Button>
          </Box>
          <ActionsMenu />
        </Box>
      </Container>
    </Layout>
  );
};

export default Invoice;
