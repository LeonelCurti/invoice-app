import { styled, Button } from "@mui/material";

export const ButtonStyle = styled((props) => (
  <Button variant="contained"  {...props} />
))(({ theme }) => ({
  textTransform: "none",
  borderRadius: "20px",
  fontSize: { xs: 16, sm: 15 },
  "& .MuiSvgIcon-root": {
    backgroundColor: "white",
    borderRadius: "10px",
    color: theme.palette.primary.main,
  },
}));
export const CancelButtonStyle = styled((props) => (
  <Button variant="contained" {...props} />
))(({ theme }) => ({
  textTransform: "none",
  borderRadius: "20px",
  // color:'inherit',
  backgroundColor: theme.palette.background.dark,
  fontSize: { xs: 16, sm: 15 },
  "&:hover": {
    backgroundColor: theme.palette.background.darker,
  },
  "& .MuiSvgIcon-root": {
    backgroundColor: "white",
    borderRadius: "10px",
    color: theme.palette.primary.main,
  },
}));
