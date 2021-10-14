import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldStyle = styled((props) => (
  <TextField
    InputProps={{ disableUnderline: true }}  
    {...props}
  />
))(({ theme }) => ({
  "& label": {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1.1rem",
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInputBase-input": {
    marginTop: "5px",
    overflow: "hidden",
    borderRadius: "5px",
    padding: "10px 12px",
    backgroundColor:
      theme.palette.mode === "light"
        ? "#fcfcfb"
        : theme.palette.background.paper,
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? "#fcfcfb"
          : theme.palette.background.paper,
    },
    "& .Mui-focused": {
      backgroundColor:
        theme.palette.mode === "light"
          ? "#fcfcfb"
          : theme.palette.background.paper,
    },
  },
}));
