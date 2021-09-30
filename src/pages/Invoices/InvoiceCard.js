import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CardActionAreaStyle = styled(CardActionArea)(({ theme }) => ({
  backgroundColor: "#232740",
  minHeight: theme.spacing(8),
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  "& :hover": {
    backgroundColor: theme.palette.backgroundInvoicePage.dark,
  },
}));

const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
  },
  transition: "0.7s",
  // "& :hover": {
  //   boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  // },
}));

const ChipStyle = styled(Chip)(({ theme }) => ({
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

export default function InvoiceCard(props) {
  const { id, date, customer, totalAmount, status } = props.invoice;
  const upperCaseFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <CardStyle>
      <CardActionAreaStyle>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          <Grid item xs={6} sm sx={{ order: 1 }}>
            <Typography>
              <span style={{ color: "#7986cb" }}>#</span>
              {id}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm
            sx={{
              order: { xs: 3, sm: 2 },
              "&.MuiGrid-item": {
                paddingBottom: { xs: "0px" },
              },
            }}
          >
            <Typography variant="body2"> {`Due ${date}`}</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm
            sx={{
              order: { xs: 2, sm: 3 },
              textAlign: { xs: "right", sm: "left" },
            }}
          >
            <Typography sx={{ paddingLeft: { sm: 2, md: 3 } }} variant="body2">
              {customer}
            </Typography>
          </Grid>
          <Grid
            item
            xs
            sm
            sx={{
              textAlign: { sm: "right" },
              order: { xs: 5, sm: 4 },
              paddingRight: { sm: 2, md: 6 },
              "& .MuiGrid-item": {
                paddingTop: { xs: 0, sm: "initial" },
              },
            }}
          >
            <Typography variant="h6">
              <span>£</span> {totalAmount}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm
            sx={{
              order: { xs: 4, sm: 5 },
              position: { xs: "relative", sm: "static" },
              top: { xs: "20px" },
            }}
          >
            <Box
              display="flex"
              //justifyContent="center"
              alignItems="center"
              sx={{ justifyContent: { xs: "right", sm: "center" } }}
            >
              <ChipStyle
                label={upperCaseFirstLetter(status)}
                variant="outlined"
                className={status}
              />

              <KeyboardArrowRightIcon
                sx={{
                  marginLeft: { sm: 1, md: 3 },
                  color: "primary.main",
                  display: { xs: "none", sm: "block" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </CardActionAreaStyle>
    </CardStyle>    
  );
}
