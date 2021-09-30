import React from "react";
import { Typography, Container } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        404: The page you are looking for isn’t here
      </Typography>
    </Container>
  );
};

export default NotFound;
