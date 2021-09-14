import React from "react";
import clsx from "clsx";
import {
  Typography,
  useMediaQuery,
  Box,
  Grid,
  Card,
  CardActionArea,
  Chip,
  Hidden,
} from "@material-ui/core";
// import Brightness1Icon from "@material-ui/icons/Brightness1";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    borderRadius: "10px",
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
    },
    transition: "0.6s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  cardActionArea: {
    backgroundColor: "#232740",
    minHeight: theme.spacing(8),
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    "&:hover": {
      backgroundColor: "#242842",
    },
  },
  arrowRightIcon: {
    marginLeft: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  statusBullet: {
    display: "inline-block",
    borderRadius: "50%",
    flexGrow: 0,
    flexShrink: 0,
    height: theme.spacing(1),
    width: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  chip: {
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
  },
  innerSpan: {
    color: "#7986cb",
  },
  item1: {
    order: 1,
  },
  item2: {
    order: 2,
    [theme.breakpoints.down("xs")]: {
      order: 3,
      "&.MuiGrid-item": {
        paddingBottom: "0px",
      },
    },
  },
  item3: {
    order: 3,
    [theme.breakpoints.down("xs")]: {
      order: 2,
      textAlign: "center",
    },
  },
  item4: {
    order: 4,
    [theme.breakpoints.down("xs")]: {
      order: 5,
      "&.MuiGrid-item": {
        paddingTop: "0px",
      },
    },
  },
  item5: {
    order: 5,
    [theme.breakpoints.down("xs")]: {
      order: 4,
      position: "relative",
      top: "20px",
    },
  },
  paid: {
    color: theme.palette.success.main,
    backgroundColor: "rgba(56, 142, 60, 0.2)",
    borderStyle: "none",
  },
  draft: {
    backgroundColor: "rgba(213, 213, 213, 0.1)",
    borderStyle: "none",
  },
  pending: {
    color: theme.palette.warning.main,
    backgroundColor: "rgba(245, 124, 0, 0.2)",
    borderStyle: "none",
  },
}));

export default function InvoiceCard(props) {
  const classes = useStyles();
  const { id, date, customer, totalAmount, status } = props.invoice;
  const theme = useTheme();

  const upperCaseFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardActionArea}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={matchesSm ? 2 : 1}
          >
            <Grid item xs={6} sm className={classes.item1}>
              <Typography>
                <span className={classes.innerSpan}>#</span>
                {id}
              </Typography>
            </Grid>
            <Grid item xs={6} sm className={classes.item2}>
              <Typography variant="body2"> {`Due ${date}`}</Typography>
            </Grid>
            <Grid item xs={6} sm className={classes.item3}>
              <Typography variant="body2">{customer}</Typography>
            </Grid>
            <Grid item xs={6} sm className={classes.item4}>
              <Typography variant="h6">£{totalAmount}</Typography>
            </Grid>
            <Grid item xs={6} sm className={classes.item5}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Chip
                  label={upperCaseFirstLetter(status)}
                  variant="outlined"
                  className={clsx(classes.chip, classes[status])}
                />
                <Hidden xsDown>
                  <KeyboardArrowRightIcon className={classes.arrowRightIcon} />
                </Hidden>
              </Box>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </div>
  );
}
