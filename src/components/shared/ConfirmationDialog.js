import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { ButtonStyle } from "./Buttons";

function ConfirmationDialog(props) {
  const { open, onClose, title, content, onConfirm } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <ButtonStyle onClick={onConfirm}>Yes</ButtonStyle>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
