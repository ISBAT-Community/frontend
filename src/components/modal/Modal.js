import * as React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import LockIcon from "@material-ui/icons/Lock";
import { IOSSwitch } from "../../utils/Switch";
import { styles } from "./model.styles.module";
import { withStyles } from "@material-ui/styles";

function Modal({ classes }) {
  const [state, setState] = React.useState({
    name: "",
    open: false,
    description: "",
    visibility: false
  });

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleClickOpen = () => {
    setState({ ...state, open: !state.open });
  };

  const handleClose = () => {
    setState({ ...state, open: !state.open });
  };

  const handleVisibility = event => {
    setState({ ...state, visibility: event.target.checked });
  };

  const handleCreateChannel = async () => {
    const visibility = state.visibility ? "private" : "public";

    const channelData = {
      name: state.name,
      visibility,
      description: state.description
    };

    try {
      await axios.post("http://localhost:9090/channels", channelData);
    } catch (err) {
      console.log(err);
    }

    handleClose();
  };

  return (
    <div>
      <Tooltip title="Create new Channel" placement="right">
        <Button className={classes.newChannel} onClick={handleClickOpen}>
          New
        </Button>
      </Tooltip>
      <Dialog
        open={state.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography className={classes.title} variant="body2">
              Create New {state.visibility ? "Private" : ""} Channel
            </Typography>
            <CloseIcon onClick={handleClose} />
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.description}>
            Channels are where you and your friends, team can communicate.
            Topic, for example — # Learn React.
          </DialogContentText>
          <form action="/">
            <FormControl className={classes.form} variant="outlined">
              <InputLabel
                className={classes.label}
                htmlFor="outlined-adornment-name"
              >
                {state.visibility ? (
                  <LockIcon className={classes.lockIcon} />
                ) : (
                  ""
                )}
                Channel Name
              </InputLabel>
              <OutlinedInput
                className={
                  state.focus ? classes.inputFieldFocus : classes.inputField
                }
                type="text"
                autoFocus
                value={state.name}
                onChange={handleChange("name")}
              />
              {/* <Typography className={classes.error} variant="caption">
                {emailError && emailError}
              </Typography> */}
            </FormControl>
            <FormControl className={classes.form} variant="outlined">
              <InputLabel
                className={classes.label}
                htmlFor="outlined-adornment-description"
              >
                Description-(optional)
              </InputLabel>
              <OutlinedInput
                className={
                  state.desInput ? classes.inputFieldFocus : classes.inputField
                }
                type="text"
                value={state.description}
                onChange={handleChange("description")}
              />
              <Typography variant="caption" className={classes.subdesc}>
                Let your friends know What's this channel is about?
              </Typography>
            </FormControl>
          </form>

          <div className={classes.private_channel_container}>
            <Typography variant="body2" className={classes.private_channel}>
              <LockIcon className={classes.lockIcon} />
              Private Channel
            </Typography>
            <IOSSwitch
              className={classes.switch}
              onChange={e => handleVisibility(e)}
            />
          </div>
          <Typography variant="caption" className={classes.subdesc}>
            {state.visibility
              ? "You're creating a private channel. Only selected members will be able to view"
              : " Making a channel private, only selected members will be able to view this channel"}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.dialog_action}>
          <Button className={classes.btn} onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={
              state.name.length >= 3 && state.name !== "" ? false : true
            }
            className={classes.btn__create}
            onClick={handleCreateChannel}
          >
            Create Channel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(Modal);
