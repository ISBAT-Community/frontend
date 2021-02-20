import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import { colors } from "../constants/colors";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  onlineUser: {
    width: "100%",
    padding: "1rem .5rem",
    height: "90vh",
    overflowY: "scroll",
    marginTop: "10%"
    // background: colors.textColor
  },
  user: {
    display: "flex",
    alignItems: "center",
    margin: ".5rem 0"
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 3,
    borderRadius: "50%",
    background: colors.secondary_color
  },
  name: {
    width: 100,
    display: "flex",
    alignItems: "center",
    height: "1.3rem",
    borderRadius: 10,
    background: colors.secondary_color
  }
});

const User = () => {
  const classes = useStyles();
  return (
    <div className={classes.user}>
      <Typography className={classes.img}></Typography>
      <Typography className={classes.name} variant="caption">
        <LinearProgress />
      </Typography>
    </div>
  );
};

function RightSIdeBarLoading() {
  const classes = useStyles();
  return (
    <div className={classes.onlineUser}>
      {[...new Array(10)].map((i, x) => (
        <User key={x} />
      ))}
    </div>
  );
}

export default RightSIdeBarLoading;
