import React from "react";
import { TextFieldStyle } from "./TextFieldStyle";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Box } from "@mui/system";

export default function BasicDatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Box
        sx={{
          boxSizing: "border-box",
          "& .MuiInput-root": {
            marginTop: "21px",
            overflow: "hidden",
            borderRadius: "5px",
            border: "1px solid transparent",
            backgroundColor: "background.paper",
            // backgroundColor: "green",
            "& .MuiInputBase-input": {
              border: "none",
              marginTop: "0px",
              padding: "10px 6px 10px 6px",
              // backgroundColor: "red",
              "&:focus": {
                border: "none",
              },
            },
            "& .MuiButtonBase-root": {
              marginRight: 1,
              // backgroundColor: "yellow",
            },
            "&.Mui-focused": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          },
        }}
      >
        <DatePicker
          InputProps={{
            disableUnderline: true,
            // disableRipple: true,
          }}
          // desktopModeMediaQuery="(min-width:600px)"
          label={props.label}
          value={props.value}
          name={props.name}          
          onBlur={props.onBlur}
          onChange={props.onChange}
          renderInput={(params) => <TextFieldStyle helperText={props.helperText} error={props.error} fullWidth {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
}
