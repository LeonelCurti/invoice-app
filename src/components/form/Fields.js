import React from "react";
import { Grid, Typography } from "@mui/material";
import { TextFieldStyle } from "./TextFieldStyle";

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
            label="Street Address"           
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="City"           
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Post Code"           
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Country"           
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
      </Grid>

      <Subtitle title="Bill To" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Client's Name"           
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Client's Email"
            // defaultValue=" "
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Street Address"   
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="City"
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Post Code"
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Country"
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Invoice Date"
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Payment Terms"
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Project Description"
            // helperText="Some important text"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BillingInfoForm;
