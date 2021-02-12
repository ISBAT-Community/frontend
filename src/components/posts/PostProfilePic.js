import { useState } from "react";
import { colors, font } from "../constants/colors";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import dayjs from "dayjs";

const useStyles = makeStyles({
  bio: {
    marginLeft: 15,
    color: colors.white
  },
  btn__joined: {
    display: "flex",
    flexDirection: "column"
  },
  joined: {
    color: colors.white
  },

  paper: {
    width: "18%",
    marginLeft: 20,
    background: colors.secondary_color,
    border: `1px solid ${colors.secondary_background_color}`
  },
  popover: {
    borderRadius: 10,
    pointerEvents: "none"
  },
  profileContainer: {
    padding: "0 0 10px 20px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    background: colors.secondary_color,
    borderBottom: `1px solid ${colors.borderColor}`
  },
  popoverProfilePic: {
    width: 65,
    height: 65,
    marginTop: 10,
    cursor: "pointer",
    objectFit: "cover",
    borderRadius: 50
  },
  posted_by: {
    fontWeight: font.fontWeightBold,
    color: colors.yelllowOrangeColor
  },
  userinfo: {
    marginLeft: 10,
    paddingTop: 10
  },
  friendRequest: {
    fontSize: 12,
    cursor: "pointer",
    color: colors.lightBlue,
    textTransform: "capitalize"
  }
});

function PostProfilePic({ userInfo }) {
  const [anchorEl, setAnchorEl] = useState(false);

  const handlePopoverOpen = event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(false);
  };

  const open = Boolean(anchorEl);

  const classes = useStyles();

  return (
    <div className="post__profile--pic">
      <Link to={`/profile/${userInfo._id}`}>
        <img
          src={userInfo.profilePic}
          alt="profilePic"
          onMouseLeave={handlePopoverClose}
          onMouseEnter={handlePopoverOpen}
        />
      </Link>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        //   disableRestoreFocus
      >
        <div className={classes.profileContainer}>
          <img
            src={userInfo.profilePic}
            alt="profileImage"
            className={classes.popoverProfilePic}
          />
          <div className={classes.userinfo}>
            <Typography variant="body2" className={classes.posted_by}>
              {userInfo.username}
            </Typography>
            <div className={classes.btn__joined}>
              <Typography variant="caption" className={classes.joined}>
                Joined: {dayjs(userInfo.createdAt).format("DD/MM/YYYY")}
              </Typography>
              <Link
                variant="text"
                to="/settings"
                className={classes.friendRequest}
              >
                send friend Request
              </Link>
            </div>
          </div>
        </div>

        {userInfo.bio && (
          <div>
            <Typography variant="caption" className={classes.bio}>
              {userInfo.bio}
            </Typography>
          </div>
        )}
      </Popover>
    </div>
  );
}

export default PostProfilePic;
