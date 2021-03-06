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
    fontSize: "1.2rem",
  },
  "& label.Mui-focused": {
    color: theme.palette.text.primary,
  },
  "& label.Mui-error": {
    color: theme.palette.text.primary,
  },
  "& .MuiInputBase-input": {
    marginTop: "5px",
    overflow: "hidden",
    borderRadius: "5px",
    padding: "10px 12px",
    border: "1px solid transparent",
    boxShadow: `${
      theme.palette.mode === "light"
      ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      : "none"
    }`,
    backgroundColor: theme.palette.background.paper,
    "&:focus": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  "& .MuiInput-root.Mui-error input": {
    border: `1px solid ${theme.palette.error.main}`
  },
}));
