import React from "react";
import { Typography, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Add from "@mui/icons-material/Add";
import Dropdown from "./Dropdown";
import { ButtonStyle } from "../../components/shared/Buttons";
import { invoicesMessage } from "../../utils";

const Header = ({ onOpenForm, filter, setFilter, invoicesLength }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Typography variant="h4" fontWeight={500}>
          Invoices
        </Typography>
        <Typography color="textSecondary">
          {invoicesMessage(invoicesLength, matches)}
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
