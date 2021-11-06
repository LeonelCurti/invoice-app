import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
const Dropdown = ({ filter, handleChange }) => {
  return (
    <FormControl
      variant="standard"
      sx={{
        marginLeft: {
          sm: 1,
        },
        textAlign: "center",
        minWidth: 70,
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
            backgroundColor: "background.default",
          },
        }}
        MenuProps={{
          sx: {
            "& .MuiList-root": {
              minWidth: 150,
              backgroundColor: "background.light",
            },
            "& .MuiPaper-root": {
              boxShadow: 3,
            },
          },
        }}
        disableUnderline
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"draft"}>Draft</MenuItem>
        <MenuItem value={"pending"}>Pending</MenuItem>
        <MenuItem value={"paid"}>Paid</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
