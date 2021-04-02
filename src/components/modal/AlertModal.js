import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";
import { styles } from "./alertModal.styles.module";
import axios from "axios";

const AlertModal = ({ message_id, handleClose, open, classes }) => {
  const handleDeleteMessage = async (e, id) => {
    e.preventDefault();
    await axios.delete(`messages/${id}`);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this message
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to perform this action
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.deleteBtnNo}
            onClick={handleClose}
            color=""
          >
            No
          </Button>
          <Button
            onClick={e => handleDeleteMessage(e, message_id)}
            className={classes.deleteBtnYes}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(AlertModal);
