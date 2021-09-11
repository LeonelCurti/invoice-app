import React from "react";
import {
  Button,
  Typography,
  useMediaQuery,
  Box,
  Grid,
  Chip,
  Paper,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  paper: {
    backgroundColor: "#232740",
    padding: theme.spacing(1),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { invoices } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Typography>{invoices[0].id}</Typography>
          <Typography>{invoices[0].date}</Typography>
          <Typography>{invoices[0].customer}</Typography>
          <Typography>{invoices[0].totalAmount}</Typography>
          <Chip color="primary" label={invoices[0].status} />
        </Box>
      </Paper>
    </div>
  );
}
