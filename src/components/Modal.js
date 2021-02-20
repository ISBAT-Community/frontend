import { useState } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { colors, font } from "../components/constants/colors";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import LockIcon from "@material-ui/icons/Lock";
import { IOSSwitch } from "../utils/Switch";

const useStyles = makeStyles({
  btn: {
    fontSize: ".8rem",
    textTransform: "capitalize",
    color: colors.lightgray
  },
  addChannel: {
    color: colors.lightgray
  },
  btn_post: {
    color: colors.lightgray,
    marginRight: "1rem",
    background: "#fff"
  },
  btn__create: {
    fontSize: "90%",
    textTransform: "capitalize",
    color: colors.whiteColor,
    background: `${colors.lightBlue}!important`
  },
  dialogTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    fontSize: "1.3rem",
    color: colors.black,
    fontWeight: "bold",
    justifyContent: "flex-start",
    fontFamily: font.fontFamily
  },
  form: {
    width: "100%"
  },
  description: {
    color: colors.lightgray,
    fontSize: ".8rem",
    paddingBottom: "1rem"
  },
  inputField: {
    width: "100%",
    fontSize: ".95rem",
    fontFamily: font.fontFamily,
    color: colors.textColor,
    margin: ".3rem 0",
    background: colors.background_color,
    border: `1px solid ${colors.borderColor}`
  },
  inputFieldFocus: {
    width: "100%",
    fontSize: ".95rem",
    fontFamily: font.fontFamily,
    color: colors.textColor,
    margin: ".3rem 0",
    background: colors.background_color,
    border: `1px solid ${colors.lightBlue}`
  },
  label: {
    marginTop: ".4rem",
    color: `${colors.textColor} !important`,
    fontSize: ".8rem",
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  newChannel: {
    fontSize: "90%",
    fontWeight: "bold",
    color: colors.lightBlue,
    background: `#fff !important`,
    textTransform: "capitalize"
  },
  subdesc: {
    marginLight: 10,
    color: colors.darkGrayColor
  },
  private_channel: {
    display: "flex",
    color: colors.black,
    alignItems: "center"
  },
  lockIcon: {
    marginRight: 4,
    fontSize: "1.2rem",
    color: colors.darkGrayColor
  },
  private_channel_container: {
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  dialog_action: {
    marginRight: 10
  }
});

export default function Modal(props) {
  const [values, setValues] = useState({
    name: "",
    open: false,
    focus: null,
    desInput: null,
    description: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickOpen = () => {
    setValues({ ...values, open: !values.open });
  };
  const handleClose = () => {
    setValues({ ...values, open: !values.open });
  };

  const handleMouseEnter = input => {
    if (input === "name") setValues({ ...values, focus: true });
    else if (input === "description") setValues({ ...values, desInput: true });
  };

  const handleMouseLeave = input => {
    if (input === "name") setValues({ ...values, focus: false });
    else if (input === "description") setValues({ ...values, desInput: false });
  };

  const handleCreateChannel = async () => {
    const channelData = {
      name: values.name
    };

    try {
      await axios.post("http://localhost:9090/channels", channelData);
    } catch (err) {
      console.log(err);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Create new Channel" placement="right">
        <Button className={classes.newChannel} onClick={handleClickOpen}>
          New
        </Button>
      </Tooltip>
      <Dialog
        open={values.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography className={classes.title} variant="body2">
              {props.title}
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
                Channel Name
              </InputLabel>
              <OutlinedInput
                className={
                  values.focus ? classes.inputFieldFocus : classes.inputField
                }
                type="text"
                autoFocus
                onMouseEnter={() => handleMouseEnter("name")}
                onMouseLeave={() => handleMouseLeave("name")}
                value={values.name}
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
                onMouseEnter={() => handleMouseEnter("description")}
                onMouseLeave={() => handleMouseLeave("description")}
                className={
                  values.desInput ? classes.inputFieldFocus : classes.inputField
                }
                type="text"
                value={values.description}
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
            <IOSSwitch className={classes.switch} />
          </div>
          <Typography variant="caption" className={classes.subdesc}>
            Making a channel private, only selected members will be able to view
            this channel
          </Typography>
        </DialogContent>
        <DialogActions className={classes.dialog_action}>
          <Button className={classes.btn} onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={values.name === "" ? true : false}
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
