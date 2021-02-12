import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import { colors } from "../constants/colors";

const useStyles = makeStyles({
  onlineUser: {
    width: "100%",
    padding: "1rem .5rem",
    height: "90vh",
    overflowY: "scroll",
    background: colors.textColor
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
    background: colors.darkblue
  },
  name: {
    width: 100,
    height: "1.3rem",
    borderRadius: 10,
    background: colors.darkblue
  }
});

const User = props => {
  const classes = useStyles();
  return (
    <div className={classes.user}>
      <Typography className={classes.img} />
      <Typography className={classes.name} variant="caption"></Typography>
    </div>
  );
};

function RightSIdeBarLoading() {
  const classes = useStyles();
  return (
    <div className={classes.onlineUser}>
      {[
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ].map((i, x) => (
        <User key={x} />
      ))}
    </div>
  );
}

export default RightSIdeBarLoading;
