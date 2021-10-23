import React from "react";
import { TextFieldStyle } from "./TextFieldStyle";
import MenuItem from "@mui/material/MenuItem";

const paymentTerms = [
  {
    value: '1',
    label: 'Net 1 Days',
  },
  {
    value: '7',
    label: 'Net 7 Days',
  },
  {
    value: '14',
    label: 'Net 14 Days',
  },
  {
    value: '30',
    label: 'Net 30 Days',
  },
]
const Dropdown = ({label}) => {
  const [paymentTerm, setPaymentTerm] = React.useState('30');

  const handleChange = (event) => {
    setPaymentTerm(event.target.value);
  };

  return (
    <TextFieldStyle
    fullWidth
    id="select-paymentTerm"
    select
    label={label}
    value={paymentTerm}
    onChange={handleChange}
    // helperText="Please select your currency"
  >
    {paymentTerms.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextFieldStyle>
  );
};

export default Dropdown;
