import React from "react";
import { colors, font } from "../constants/colors";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  content: {
    width: 400,
    padding: 10,
    display: "flex",
    borderRadius: 5,
    marginTop: "1rem",
    justifyContent: "center",
    fontFamily: font.fontFamily,
    background: colors.borderColor
  },
  hint: {
    marginTop: "2rem",
    fontSize: "0.8rem"
  },
  noMessages_container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "70%",
    alignItems: "center",
    justifyContent: "center"
  },
  welcometext: {
    fontWeight: 900,
    fontSize: "1.6rem"
  }
};

function NoMessages({ classes, name }) {
  return (
    <div className={classes.noMessages_container}>
      <Typography className={classes.welcometext} variant="body1">
        Welcome to
      </Typography>
      <Typography className={classes.welcometext} variant="body2">
        {name}
      </Typography>

      <Typography className={classes.hint}>
        Here are some step to help you bost up you channel
      </Typography>

      <div className={classes.content}>
        <Typography>Create a new Channel for Rules</Typography>
      </div>

      <div className={classes.content}>
        <Typography>Create a new Channel for Rules</Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(NoMessages);
