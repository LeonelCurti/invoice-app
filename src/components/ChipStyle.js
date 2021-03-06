import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChipStyle = styled(Chip)(({ theme }) => ({
  minWidth: theme.spacing(13),
  borderRadius: "5px",
  fontWeight: 500,
  fontSize: "1rem",
  borderStyle: "none",
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
  },
  "&.draft": {
    backgroundColor: `${
      theme.palette.mode === "light"
        ? "rgba(213, 213, 213, 0.5)"
        : "rgba(213, 213, 213, 0.1)"
    }`,
  },
  "&.pending": {
    color: theme.palette.warning.main,
    backgroundColor: "rgba(245, 124, 0, 0.2)",
  },
  "& .dot": {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    display: "inline-block",
    "&.paid": {
      backgroundColor: theme.palette.success.main,
    },
    "&.draft": {
      backgroundColor: `${theme.palette.mode === "light" ? "black" : "white"}`,
      // backgroundColor: "white",
    },
    "&.pending": {
      backgroundColor: theme.palette.warning.main,
    },
  },
}));
