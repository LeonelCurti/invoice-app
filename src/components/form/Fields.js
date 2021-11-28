import React from "react";
import { Grid, Typography } from "@mui/material";
import { TextFieldStyle } from "./TextFieldStyle";
import { useFormikContext } from 'formik'

import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import { getIn } from "formik";

const Fields = () => {
  const formik = useFormikContext()

  return (
    <>
      <Typography
        color="primary"
        variant="subtitle1"
        gutterBottom
        mt={3}
        mb={2}
      >
        Bill From
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Street Address"
            name="originAddress.street"
            {...formik.getFieldProps("originAddress.street")}
            error={Boolean(
              getIn(formik.touched, "originAddress.street") &&
                getIn(formik.errors, "originAddress.street")
            )}      
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="City"
            name="originAddress.city"
            {...formik.getFieldProps("originAddress.city")}
            error={Boolean(
              getIn(formik.touched, "originAddress.city") &&
                getIn(formik.errors, "originAddress.city")
            )}           
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Post Code"
            name="originAddress.postCode"
            {...formik.getFieldProps("originAddress.postCode")}
            error={Boolean(
              getIn(formik.touched, "originAddress.postCode") &&
                getIn(formik.errors, "originAddress.postCode")
            )}        
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Country"
            name="originAddress.country"
            {...formik.getFieldProps("originAddress.country")}
            error={Boolean(
              getIn(formik.touched, "originAddress.country") &&
                getIn(formik.errors, "originAddress.country")
            )}
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography
        color="primary"
        variant="subtitle1"
        gutterBottom
        mt={3}
        mb={2}
      >
        Bill To
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Client's Name"
            name="client.name"
            {...formik.getFieldProps("client.name")}
            error={Boolean(
              getIn(formik.touched, "client.name") &&
                getIn(formik.errors, "client.name")
            )}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Client's Email"
            name="client.email"
            {...formik.getFieldProps("client.email")}
            error={Boolean(
              getIn(formik.touched, "client.email") &&
                getIn(formik.errors, "client.email")
            )}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Street Address"
            name="client.street"
            {...formik.getFieldProps("client.street")}
            error={Boolean(
              getIn(formik.touched, "client.street") &&
                getIn(formik.errors, "client.street")
            )}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="City"
            name="client.city"
            {...formik.getFieldProps("client.city")}
            error={Boolean(
              getIn(formik.touched, "client.city") &&
                getIn(formik.errors, "client.city")
            )}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Post Code"
            name="client.postCode"
            {...formik.getFieldProps("client.postCode")}
            error={Boolean(
              getIn(formik.touched, "client.postCode") &&
                getIn(formik.errors, "client.postCode")
            )}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldStyle
            label="Country"
            name="client.country"
            {...formik.getFieldProps("client.country")}
            error={Boolean(
              getIn(formik.touched, "client.country") &&
                getIn(formik.errors, "client.country")
            )}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DatePicker
            label="Invoice Date"
            name="createdAt"
            value={formik.values.createdAt}
            onChange={(value) => formik.setFieldValue("createdAt", value)}
            onBlur={formik.handleBlur}
            error={Boolean(
              getIn(formik.touched, "createdAt") &&
                getIn(formik.errors, "createdAt")
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Dropdown
            label="Payment Terms"
            name="paymentTerms"
            value={formik.values.paymentTerms}
            onChange={(value) => formik.setFieldValue("paymentTerms", value)}
            onBlur={formik.handleBlur}
            error={Boolean(
              getIn(formik.touched, "paymentTerms") &&
                getIn(formik.errors, "paymentTerms")
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyle
            label="Project Description"
            name="description"
            {...formik.getFieldProps("description")}
            error={Boolean(
              getIn(formik.touched, "description") &&
                getIn(formik.errors, "description")
            )}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Fields;
