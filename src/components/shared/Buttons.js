import { styled, Button } from "@mui/material";

export const ButtonStyle = styled((props) => (
  <Button variant="contained" disableElevation {...props} />
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
  <Button variant="contained" disableElevation {...props} />
))(({ theme }) => ({
  textTransform: "none",
  borderRadius: "20px",
  backgroundColor: theme.palette.background.light,
  fontSize: { xs: 16, sm: 15 },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  "& .MuiSvgIcon-root": {
    backgroundColor: "white",
    borderRadius: "10px",
    color: theme.palette.primary.main,
  },
}));
