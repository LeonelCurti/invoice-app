import React from "react";
import {
  Button,
  Typography,
  Select,
  MenuItem,
  useMediaQuery,
  Box,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Add from "@mui/icons-material/Add";

export default function TopMenu() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  // const handleClose = (event) => {
  //   console.log(event.target.value);
  //   // setFilter(event.target.value);
  // };

  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Typography variant="h4">Invoices</Typography>
        <Typography color="textSecondary">
          {matches ? "There are 7 total invoices" : "7 invoices"}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <FormControl
          variant="standard"
          sx={{
            marginLeft: {
              sm: 1,
            },
            minWidth: 80,
          }}
        >
          <Select
            value={filter}
            labelId="simple-select-label"
            displayEmpty
            id="simple-select"
            sx={{
              textAlign: "right",
              "& .MuiSelect-icon": {
                color: "primary.main",
              },
              "& .MuiSelect-select:focus": {
                backgroundColor: "backgroundInvoicePage.main",
              },
            }}
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
          <Button
            variant="contained"
            sx={{ 
              textTransform: "none",
              borderRadius: "20px",
              fontSize:{xs:16,sm:15},
              '& .MuiSvgIcon-root':{
                backgroundColor:'white',
                borderRadius:'10px',
                color:'primary.main'
              } 
            }}
            color="primary"
            disableElevation
            startIcon={<Add />}
          >
            {matches ? "New Invoice" : "New"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
