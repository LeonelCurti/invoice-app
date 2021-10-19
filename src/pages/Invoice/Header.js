import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { upperCaseFirstLetter } from "../../utils";
import { ChipStyle } from "../../components/ChipStyle";
import clsx from "clsx";
import {
  ButtonStyle,
  CancelButtonStyle,
} from "../../components/shared/Buttons";

const invoiceActions = ({
  status,
  onEdit,
  onDelete,
  onMarkAsPending,
  onMarkAsPaid,
}) => {
  return (
    <Card
      sx={{
        display: { xs: "block", sm: "flex" },
        borderRadius: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: 2,
        paddingX: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            marginRight: 2,
          }}
        >
          Status
        </Typography>
        <ChipStyle
          label={upperCaseFirstLetter(status)}
          variant="outlined"
          className={status}
          avatar={<span className={clsx("dot", status)}></span>}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiButton-root": {
            marginX: 1,
          },
        }}
      >
        {(status === "draft" || status === "pending") && (
          <CancelButtonStyle onClick={onEdit}>Edit</CancelButtonStyle>
        )}
        <ButtonStyle color="error" onClick={onDelete}>
          Delete
        </ButtonStyle>
        {status === "draft" && (
          <ButtonStyle onClick={onMarkAsPending}>Mark as Pending</ButtonStyle>
        )}
        {status === "pending" && (
          <ButtonStyle onClick={onMarkAsPaid}>Mark as Paid</ButtonStyle>
        )}
      </Box>
    </Card>
  );
};

export default invoiceActions;
