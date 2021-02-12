import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import UserDetails from "./UserDetails";
import Tooltip from "@material-ui/core/Tooltip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Channels from "./Channels";

import { colors } from "../constants/colors";

const useStyles = makeStyles({
  SideBar: {
    width: "30%",
    marginRight: ".1rem",
    background: "#36393f",
    padding: "0 1rem",
    borderRight: `1px solid ${colors.dark_background_color}`
  },
  SideBar_profilePic: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  SideBar_profilePic_img: {
    width: "80px",
    height: "80px",
    marginTop: "20%",
    objectFit: "cover",
    borderRadius: "50%"
  },
  editIcon: {
    margin: "-2rem 0 0 6rem",
    color: colors.lightYellowGreen
  }
});

function SideBar({ username, createdAt, bio, profilePic }) {
  const classes = useStyles();

  return (
    <div className={classes.SideBar}>
      <div className={classes.SideBar_profilePic}>
        <img
          className={classes.SideBar_profilePic_img}
          src={profilePic}
          alt="profile"
        />
      </div>
      <Tooltip title="Edit Profile Pic" placement="right-end">
        <IconButton className={classes.editIcon}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <UserDetails username={username} createdAt={createdAt} bio={bio} />
      <hr />
      <Channels />
    </div>
  );
}

export default SideBar;
