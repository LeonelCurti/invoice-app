import React from "react";
import {
  Select,
  MenuItem,
  useMediaQuery,
  FormControl,
  useTheme,
} from "@mui/material";
const Dropdown = ({ filter, handleChange }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <FormControl
      variant="standard"
      sx={{
        marginLeft: {
          sm: 1,
        },
        minWidth: 80,
      }}
    >
      <Select
        value={filter}
        labelId="simple-select-label"
        displayEmpty
        id="simple-select"
        sx={{
          textAlign: "right",
          "& .MuiSelect-icon": {
            color: "primary.main",
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "backgroundInvoicePage.main",
          },
        }}
        disableUnderline
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="" disabled>
          {matches ? "Filter by Status" : "Filter"}
        </MenuItem>
        <MenuItem value={10}>All</MenuItem>
        <MenuItem value={20}>Draft</MenuItem>
        <MenuItem value={30}>Pending</MenuItem>
        <MenuItem value={40}>Paid</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
