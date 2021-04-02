import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationIcon from "@material-ui/icons/Notifications";
import { colors, font } from "../../components/constants/colors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const useStyles = makeStyles({
  icon: {
    fontSize: "1.2rem",
    marginRight: 5,
    color: colors.lightgreen,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  settings: {
    display: "flex",
    padding: ".3rem 0",
    color: colors.textColor,
    textDecoration: "none",
    alignItems: "center",
    fontFamily: font.fontFamily
  },
  createdAt: {
    fontSize: ".8rem",
    margin: ".5rem 0",
    color: colors.textColor
  },
  website: {
    fontSize: ".9rem",
    fontFamily: font.fontFamily,
    textDecoration: "none",
    margin: ".5rem 0",
    color: colors.skyBlue
  },
  text: {
    fontSize: "85%",
    fontFamily: font.fontFamily
  },
  username: {
    fontSize: "1.3rem",
    margin: "0 2rem",
    fontFamily: font.fontFamily,
    color: colors.white
  },
  button: {
    height: 33,
    fontSize: ".8rem",
    color: colors.lightBlue,
    textTransform: "capitalize",
    border: `1px solid ${colors.lightBlue}`
  }
});

function UserDetails() {
  dayjs.extend(relativeTime);

  const classes = useStyles();
  return (
    <div className="profile-details">
      {/* <div className={classes.createdAt}>
        <Typography variant="caption">{bio ? "Bio:" + bio : null}</Typography>
      </div> */}
      <div className="location">
        <LocationOnIcon className={classes.icon} color="primary" />
        <Typography className={classes.createdAt} variant="caption">
          {" Uganda"}
        </Typography>
      </div>
      <div className="website">
        <LinkIcon className={classes.icon} color="primary" />
        <a
          className={classes.website}
          href="website"
          target="__blank"
          rel="noopener noreferrer"
        >
          {"https://website"}
        </a>
      </div>
      {/* <div className="createdAt">
        <CalendarTodayIcon className={classes.icon} color="primary" />{" "}
        <span className={classes.createdAt}>
          Joined {dayjs(createdAt).format("DD/MM/YYYY")}
        </span>
      </div> */}

      <Link to="/projects" className={classes.settings}>
        <Typography variant="caption" className={classes.text}>
          <NotificationIcon className={classes.icon} />
          Open-source
        </Typography>
      </Link>

      <Link to="/settings" className={classes.settings}>
        <Typography variant="caption" className={classes.text}>
          <NotificationIcon className={classes.icon} />
          Notification
        </Typography>
      </Link>

      <Link to="/settings" className={classes.settings}>
        <Typography className={classes.text} variant="caption">
          <SettingsIcon className={classes.icon} />
          Settings
        </Typography>
      </Link>
    </div>
  );
}

export default UserDetails;
