import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { colors } from "../constants/colors";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  post__content: {
    width: "90%",
    margin: ".5rem .5rem",
    justifyContent: "space-between"
  },
  LinearProgress: {
    height: 13,
    opacity: 0.4,
    margin: ".05rem 0",
    borderRadius: 20,
    background: colors.secondary_color
  },
  post: {
    width: "100%",
    display: "flex",
    paddingTop: 10
  },

  emoji: {
    width: 20,
    height: 20,
    borderRadius: 50,
    background: colors.secondary_color,
    color: "gray"
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    background: colors.secondary_color
  },
  post_body: {
    height: "10px",
    width: "80%",
    borderRadius: 50,
    marginTop: ".6rem",
    opacity: 0.6,
    background: colors.secondary_color
  },
  post_body2: {
    height: "10px",
    width: "400px",
    opacity: 0.5,
    borderRadius: 50,
    marginTop: ".6rem",
    background: colors.secondary_color
  },
  post_body3: {
    height: "10px",
    width: "200px",
    opacity: 0.4,
    borderRadius: 50,
    marginTop: ".6rem",
    background: colors.secondary_color
  },
  post_info: {
    display: "flex"
  },
  post_user: {
    width: "100%",
    float: "right",
    display: "flex",
    alignItems: "center"
  },
  post_timestamp: {
    width: 80,
    height: "10px",
    borderRadius: 20
  },
  posted_by: {
    height: "15px",
    width: "100px",
    borderRadius: 20,
    marginRight: "0.5rem"
  }
};

const PostLoading = ({ classes }) => {
  return (
    <div className={classes.post}>
      <div className={classes.profilePic}></div>
      <div className={classes.post__content}>
        <div className={classes.post_info}>
          <div className={classes.post_user}>
            <div className={classes.posted_by}>
              <LinearProgress className={classes.LinearProgress} />
            </div>
            <span className={classes.post_timestamp}>
              <LinearProgress className={classes.LinearProgress} />
            </span>
          </div>
          <div className={classes.post_action}>
            <div className={classes.emoji}></div>
          </div>
        </div>
        <div className={classes.post_body}>
          <LinearProgress className={classes.LinearProgress} />
        </div>
        <div className={classes.post_body2}>
          <LinearProgress className={classes.LinearProgress} />
        </div>
        <div className={classes.post_body3}>
          <LinearProgress className={classes.LinearProgress} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PostLoading);
