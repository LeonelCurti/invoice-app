import React from "react";
import { TextFieldStyle } from "./TextFieldStyle";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MuiDatePicker from "@mui/lab/DatePicker";
import { Box } from "@mui/system";

export default function DatePicker(props) {
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
            "& .MuiInputBase-input": {
              border: "none",
              marginTop: "0px",
              padding: "10px 6px 10px 6px",
              "&:focus": {
                border: "none",
              },
            },
            "& .MuiButtonBase-root": {
              marginRight: 1,
            },
            "&.Mui-focused": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          },
        }}
      >
        <MuiDatePicker
          InputProps={{
            disableUnderline: true,
            // disableRipple: true,
          }}
          // desktopModeMediaQuery="(min-width:600px)"
          label={props.label}
          value={props.value}
          name={props.name}
          //onBlur={props.onBlur}
          onChange={props.onChange}
          renderInput={(params) => (
            <TextFieldStyle error={props.error} fullWidth {...params} />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}
