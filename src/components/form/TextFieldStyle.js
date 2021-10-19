import { TextField, styled } from "@mui/material";

export const TextFieldStyle = styled((props) => (
  <TextField
    variant="standard"
    InputLabelProps={{ shrink: true }}
    InputProps={{ disableUnderline: true }}
    {...props}
  />
))(({ theme }) => ({
  "& label": {
    color: theme.palette.text.primary,
    fontSize: "1.1rem",
  },
  "& label.Mui-focused": {
    color: theme.palette.text.primary,
  },
  "& .MuiInputBase-input": {
    marginTop: "5px",
    overflow: "hidden",
    borderRadius: "5px",
    padding: "10px 12px",
    border: "1px solid transparent",
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      // backgroundColor: theme.palette.background.paper,
    },
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main}`,
      // backgroundColor: theme.palette.background.paper,
    },
    // "& .Mui-focused": {
    //   backgroundColor: theme.palette.background.paper,
    // },
  },
}));
