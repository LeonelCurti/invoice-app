import React from "react";
import { TextField, Grid, Typography, styled } from "@mui/material";

const TextFieldStyle = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& label": {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1.1rem",
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInputBase-input": {
    marginTop: "5px",
    overflow: "hidden",
    borderRadius: "5px",
    padding: "10px 12px",
    backgroundColor:
      theme.palette.mode === "light"
        ? "#fcfcfb"
        : theme.palette.background.paper,
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? "#fcfcfb"
          : theme.palette.background.paper,
    },
    "& .Mui-focused": {
      backgroundColor:
        theme.palette.mode === "light"
          ? "#fcfcfb"
          : theme.palette.background.paper,
    },
  },
}));

const Subtitle = (props) => (
  <Typography color="primary" variant="subtitle2" gutterBottom mt={3} mb={2}>
    {props.title}
  </Typography>
);

const BillingInfoForm = () => {
  return (
    <React.Fragment>
      <Subtitle title="Bill From" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextFieldStyle
            id="standard-helperText"
            label="Street Address"
            defaultValue="test"
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStyle
            id="standard-helperText"
            label="City"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStyle
            id="standard-helperText"
            label="Post Code"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStyle
            id="standard-helperText"
            label="Country"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>

      <Subtitle title="Bill To" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextFieldStyle
            id="standard-helperText"
            label="Client's Name"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            id="standard-helperText"
            label="Client's Email"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            id="standard-helperText"
            label="Street Address"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStyle
            id="standard-helperText"
            label="City"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStyle
            id="standard-helperText"
            label="Post Code"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStyle
            id="standard-helperText"
            label="Country"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextFieldStyle
            id="standard-helperText"
            label="Invoice Date"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextFieldStyle
            id="standard-helperText"
            label="Payment Terms"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            id="standard-helperText"
            label="Project Description"
            defaultValue=" "
            // helperText="Some important text"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BillingInfoForm;
