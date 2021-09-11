import React from "react";
import {
  Button,
  Typography,
  Select,
  MenuItem,
  useMediaQuery,
  Box,
  FormControl,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Add from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: { },
  formControl: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
    minWidth: 80,
  },
}));

export default function Test() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Typography variant="h4">Invoices</Typography>
        <Typography color="textSecondary">
          {matches ? "There are 7 total invoices" : "7 invoices"}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <FormControl className={classes.formControl}>
          <Select
            value={filter}
            labelId="simple-select-label"
            displayEmpty
            id="simple-select"
            disableUnderline
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              {matches ? "Filter by Status" : "Filter"}
            </MenuItem>
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Draft</MenuItem>
            <MenuItem value={30}>Pending</MenuItem>
            <MenuItem value={40}>Paid</MenuItem>
          </Select>
        </FormControl>
        <Box ml={2}>
          <Button variant="contained" color="primary" startIcon={<Add />}>
            {matches ? "New Invoice" : "New"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
