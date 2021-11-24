import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Box, Grid, Card, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { upperCaseFirstLetter } from "../../utils";
import { ChipStyle } from "../../components/ChipStyle";
import clsx from "clsx";

const CardStyle = styled((props) => <Card {...props} />)(({ theme }) => ({
  width: "100%",
  border: "1px solid transparent", 
  padding: theme.spacing(2),
  borderRadius: "10px",
  [theme.breakpoints.up("sm")]: {
    "&.MuiPaper-root:hover": {
      border: `1px solid ${theme.palette.primary.dark}`,
    },
  },
  // transition: "0.2s",
  "& .MuiChip-root": {
    cursor: "pointer",
  },
}));

export default function InvoiceItem(props) {
  const { id, createdAt, client, totalAmount, status } = props.invoice;
  let history = useHistory();

  const handleViewInvoice = () => {
    history.push(`/invoice/${id}`);
  };

  return (
    <CardStyle component={ButtonBase} onClick={handleViewInvoice}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 2 }}
      >
        <Grid
          item
          xs={6}
          sm
          sx={{ order: 1, textAlign: { xs: "left", sm: "center" } }}
        >
          <Typography variant="body1" fontWeight={500}>
            <span style={{ color: "#7986cb" }}>#</span>
            {id}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm
          sx={{
            textAlign: { xs: "left", sm: "center" },
            order: { xs: 3, sm: 2 },
            "&.MuiGrid-item": {
              paddingBottom: { xs: "0px" },
            },
          }}
        >
          <Typography variant="body2"> {`Due ${createdAt}`}</Typography>
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
          <Typography sx={{ paddingLeft: { sm: 2, md: 3 } }} variant="body1">
            {client.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          sm
          sx={{
            textAlign: { xs: "left", sm: "right" },
            order: { xs: 5, sm: 4 },
            paddingRight: { sm: 2, md: 6 },
            "& .MuiGrid-item": {
              paddingTop: { xs: 0, sm: "initial" },
            },
          }}
        >
          <Typography variant="body1" fontWeight={500}>
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
    </CardStyle>
  );
}
