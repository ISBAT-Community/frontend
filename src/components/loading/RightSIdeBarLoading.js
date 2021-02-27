import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import { colors } from "../constants/colors";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  onlineUser: {
    width: "100%",
    padding: "0rem .5rem",
    height: "85vh",
    marginTop: 10,
    backgroundColor: colors.whiteColor
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
    opacity: 0.4,
    borderRadius: "50%",
    background: colors.lightBlueGray
  },
  name: {
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "1.3rem",
    opacity: 0.4,
    borderRadius: 10,
    background: colors.lightBlueGray
  },
  LinearProgress: {
    height: 13,
    opacity: 0.4,
    margin: ".05rem 0",
    borderRadius: 20,
    background: colors.lightgray
  }
});

const User = () => {
  const classes = useStyles();
  return (
    <div className={classes.user}>
      <Typography className={classes.img}></Typography>
      <div className={classes.name}>
        <LinearProgress className={classes.LinearProgress} />
      </div>
    </div>
  );
};

function RightSIdeBarLoading() {
  const classes = useStyles();
  return (
    <div className={classes.onlineUser}>
      {[...new Array(17)].map((i, x) => (
        <User key={x} />
      ))}
    </div>
  );
}

export default RightSIdeBarLoading;
