import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChipStyle = styled(Chip)(({ theme }) => ({
  minWidth: theme.spacing(13),
  borderRadius: "5px",
  fontSize: "1rem",
  [theme.breakpoints.down("xs")]: {
    minWidth: theme.spacing(15),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  "&.paid": {
    color: theme.palette.success.main,
    backgroundColor: "rgba(56, 142, 60, 0.2)",
    borderStyle: "none",
  },
  "&.draft": {
    backgroundColor: "rgba(213, 213, 213, 0.1)",
    borderStyle: "none",
  },
  "&.pending": {
    color: theme.palette.warning.main,
    backgroundColor: "rgba(245, 124, 0, 0.2)",
    borderStyle: "none",
  },
}));
