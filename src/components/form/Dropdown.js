import React from "react";
import { TextFieldStyle } from "./TextFieldStyle";
import MenuItem from "@mui/material/MenuItem";

const options = [
  {
    value: "1",
    label: "Net 1 Days",
  },
  {
    value: "7",
    label: "Net 7 Days",
  },
  {
    value: "14",
    label: "Net 14 Days",
  },
  {
    value: "30",
    label: "Net 30 Days",
  },
];
const Dropdown = (props) => {
  return (
    <TextFieldStyle
      fullWidth
      id="select-paymentTerms"
      select
      label={props.label}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      value={props.value}
      name={props.name}
      helperText={props.helperText}
      error={props.error}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextFieldStyle>
  );
};

export default Dropdown;
