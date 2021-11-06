import React from "react";
import { Typography, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Add from "@mui/icons-material/Add";
import Dropdown from "./Dropdown";
import { ButtonStyle } from "../../components/shared/Buttons";

const Header = ({ onOpenForm, filter, setFilter }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  // const handleClose = (event) => {
  //   console.log(event.target.value);
  //   // setFilter(event.target.value);
  // };

  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Typography variant="h4" fontWeight={500}>
          Invoices
        </Typography>
        <Typography color="textSecondary">
          {matches ? "There are 7 total invoices" : "7 invoices"}
        </Typography>
      </Box>
      <Box display="flex" gap={2} alignItems="center">
        <Dropdown filter={filter} handleChange={handleFilter} />
        <ButtonStyle startIcon={<Add />} onClick={onOpenForm}>
          {matches ? "New Invoice" : "New"}
        </ButtonStyle>
      </Box>
    </Box>
  );
};

export default Header;
