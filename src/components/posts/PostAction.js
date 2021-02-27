import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
// import { colors } from "../constants/colors";

const styles = {
  div: {
    display: "flex",
    border: "1px solid #ddd",
    padding: ".2rem 2rem",
    margin: "0 0rem 0 -9.5rem",
    borderRadius: 20,
    background: "#fff",
    position: "absolute",
    zIndex: 1
    //  boxShadow: `0px 0px 2px 0px ${colors.white}`
  },
  thumbup: {
    marginRight: 10,
    color: "#ccc",
    cursor: "pointer"
  },
  reply: {
    marginRight: 10,
    color: "#ccc",
    cursor: "pointer"
  },
  emji: {
    color: "#ccc",
    cursor: "pointer"
  }
};

function PostAction({ classes }) {
  return (
    <div className={classes.div}>
      <ThumbUpOutlinedIcon className={classes.thumbup} />
      <ThumbDownOutlinedIcon className={classes.thumbup} />
      <ReplyOutlinedIcon className={classes.reply} />
      <InsertEmoticonOutlinedIcon className={classes.emji} />
    </div>
  );
}

export default withStyles(styles)(PostAction);
