import makeStyles from "@material-ui/core/styles/makeStyles";
import { colors, font } from "../constants/colors";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  channel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  user_channel_link: {
    width: 110,
    height: 15,
    margin: "8px 0",
    display: "inline-block",
    borderRadius: 20
  },
  LinearProgress: {
    height: 13,
    opacity: 0.4,
    margin: ".1rem 0",
    borderRadius: 20,
    background: colors.lightBlueGray
  },
  channel_settings: {
    width: 20,
    height: 20,
    background: colors.lightBlueGray,
    borderRadius: 20,
    margin: ".5rem 0.3rem 0 0rem",
    color: colors.textColor
  },
  hashTag: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: colors.lightBlueGray,
    fontFamily: font.fontFamily
  }
});

const LoadingChannel = () => {
  const classes = useStyles();
  return (
    <div className={classes.channel}>
      <span className={classes.hashTag}>#</span>
      <div className={classes.user_channel_link}>
        <LinearProgress className={classes.LinearProgress} />
      </div>
      <div className={classes.channel_settings}></div>
    </div>
  );
};

export default LoadingChannel;
