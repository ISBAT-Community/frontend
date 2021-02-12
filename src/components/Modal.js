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

const useStyles = makeStyles({
  btn: {
    fontSize: "1rem",
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
    color: colors.white,
    background: `${colors.lightBlue}!important`
  },
  dialogTitle: {
    textAlign: "center"
  },
  title: {
    fontSize: "1rem",
    color: colors.white,
    fontWeight: "bold",
    fontFamily: font.fontFamily
  },
  form: {
    width: "100%"
  },
  text: {
    color: colors.lightgray,
    fontSize: ".8rem"
  },
  inputField: {
    width: "100%",
    fontSize: ".95rem",
    fontFamily: font.fontFamily,
    color: "white !important",
    margin: ".3rem 0",
    background: colors.secondary_background_color,
    border: `1px solid ${colors.borderColor} !important`
  },
  label: {
    marginTop: ".4rem",
    color: `${colors.textColor} !important`,
    fontSize: ".9rem",
    textTransform: "capitalize"
  },
  newChannel: {
    fontSize: "90%",
    fontWeight: "bold",
    color: colors.lightBlue,
    background: `none !important`,
    textTransform: "capitalize"
  }
});

export default function Modal(props) {
  const [values, setValues] = useState({
    name: "",
    open: false
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
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          <Typography className={classes.title} variant="body2">
            {props.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.text}>
            {props.description}
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
                className={classes.inputField}
                type="text"
                autoFocus
                value={values.name}
                onChange={handleChange("name")}
              />
              {/* <Typography className={classes.error} variant="caption">
                {emailError && emailError}
              </Typography> */}
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button className={classes.btn} onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            className={classes.btn__create}
            onClick={handleCreateChannel}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
