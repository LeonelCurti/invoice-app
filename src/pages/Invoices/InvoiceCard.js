import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Box, Grid, Card, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { upperCaseFirstLetter } from "../../utils";
import { ChipStyle } from "../../components/ChipStyle";
import clsx from "clsx";
const CardActionAreaStyle = styled(CardActionArea)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minHeight: theme.spacing(8),
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  // "&.MuiButtonBase-root:hover": {
  //   backgroundColor: theme.palette.backgroundInvoicePage.light,
  // },
}));

const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
  },
  transition: "0.7s",
  "& .MuiChip-root": {
    cursor: "pointer",
  },
}));

export default function InvoiceCard(props) {
  const { id, date, client, totalAmount, status } = props.invoice;
  let history = useHistory();

  const handleViewInvoice = () => {
    history.push(`/invoice/${id}`);
  };

  return (
    <CardStyle>
      <CardActionAreaStyle onClick={handleViewInvoice}>
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
              {client.name}
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
                avatar={<span className={clsx("dot", status)}></span>}
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
