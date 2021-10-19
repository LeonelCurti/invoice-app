import React from "react";
import { Typography, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Add from "@mui/icons-material/Add";
import Dropdown from "./Dropdown";
import { ButtonStyle } from "../../components/shared/Buttons";

const Header = ({ onOpenForm }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
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
        <Typography variant="h4">Invoices</Typography>
        <Typography color="textSecondary">
          {matches ? "There are 7 total invoices" : "7 invoices"}
        </Typography>
      </Box>
      <Box display="flex" gap={2} alignItems="center">
        <Dropdown filter={filter} handleChange={handleChange} />
        <ButtonStyle startIcon={<Add />} onClick={onOpenForm}>
          {matches ? "New Invoice" : "New"}
        </ButtonStyle>
      </Box>
    </Box>
  );
};

export default Header;
