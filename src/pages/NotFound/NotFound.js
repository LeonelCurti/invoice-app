import React from "react";
import { Typography, Container, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        bgcolor: "backgroundInvoicePage.main",
        height: "100vh",
        pt: 8,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          404: The page you are looking for isn’t here
        </Typography>
      </Container>
    </Box>
  );
};

export default NotFound;
