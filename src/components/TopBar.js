import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Avatar,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.common.white,
    // borderBottom: `1px solid ${theme.palette.divider}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  userNameText: {
    // color: theme.palette.text.primary,
    // fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
  },
  logoImg: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    alignItems: "center",
  },
}));
const TopBar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Logo
          </Typography>

          <div className={classes.flexGrow} />
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
