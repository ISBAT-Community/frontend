import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { Link } from "react-router-dom";
import { colors } from "../constants/colors";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import ReplyIcon from "@material-ui/icons/Reply";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  content: {
    padding: 2,
    background: "#fff"
  },
  link_container: {
    width: "100%",
    display: "flex",
    padding: "1rem .5rem 0rem 1rem",
    justifyContent: "space-between"
  },
  link_container_onHover: {
    width: "95%",
    display: "flex",
    color: colors.whiteColor,
    justifyContent: "space-between",
    backgroundColor: colors.lightBlue,
    margin: "0.3rem 0.3rem .5rem .3rem"
  },

  edit_message_onHover: {
    color: colors.whiteColor,
    fontSize: "85%",
    padding: ".3rem 1rem 0.3rem .5rem",
    textDecoration: "none"
  },
  edit_message: {
    color: colors.textColor,
    fontSize: "85%",
    textDecoration: "none"
  },
  reply_message: {
    color: colors.textColor,
    fontSize: "85%",
    textDecoration: "none"
  },
  delete_message: {
    fontSize: "85%",
    color: "red",
    textDecoration: "none"
  },
  icon: {
    fontSize: 20
  },
  paper: {
    width: 180,
    height: 200,
    position: "relative"
  },
  popover: {
    color: colors.white
  }
});

function More({ id, open, anchorEl, handleClose }) {
  const classes = useStyles();
  const [onHover, setOnHover] = React.useState({
    edit_message: null,
    reply_message: null,
    delete_message: null
  });

  const handleOnMouseEnter = () => {
    setOnHover({ ...onHover, edit_message: true });
  };

  const handleOnMouseLeave = () => {
    setOnHover({ ...onHover, edit_message: false });
  };

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        className={classes.popover}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Paper className={classes.paper}>
          <div className={classes.popover__content}>
            <div
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              className={
                onHover.edit_message
                  ? classes.link_container_onHover
                  : classes.link_container
              }
            >
              <Link
                to="#"
                className={
                  onHover.edit_message
                    ? classes.edit_message_onHover
                    : classes.edit_message
                }
              >
                Edit Message
              </Link>
              <EditIcon className={classes.icon} />
            </div>
            <div className={classes.link_container}>
              <Link to="#" className={classes.reply_message}>
                Reply
              </Link>
              <ReplyIcon className={classes.icon} />
            </div>
            <div className={classes.link_container}>
              <Link to="#" className={classes.delete_message}>
                Delete Message
              </Link>
              <DeleteIcon className={classes.icon} />
            </div>
          </div>
        </Paper>
      </Popover>
    </div>
  );
}

export default More;
