import UserDetails from "./UserDetails";
import withStyles from "@material-ui/core/styles/withStyles";
import Channels from "./Channels";
import { styles } from "./sideBar.styles.module";
import { Typography } from "@material-ui/core";

function SideBar({ username, createdAt, profilePic, classes }) {
  return (
    <div className={classes.SideBar}>
      <div className={classes.SideBar_profilePic}>
        <div className={classes.SideBar_userInfo}>
          <img
            className={classes.SideBar_profilePic_img}
            src={profilePic}
            alt="profile"
          />
          <p className={classes.status}></p>
        </div>
        <div>
          <Typography className={classes.SideBar_fullname}>
            {username}
          </Typography>
          <Typography className={classes.SideBar_username}>
            @_{username ? username.split(" ").join("_") : "loading..."}
          </Typography>
        </div>
      </div>
      <div className={classes.followers__following}>
        <Typography className={classes.followers}>
          <span className={classes.followers__count}>{1.7}K</span> followers
        </Typography>
        <Typography className={classes.following}>
          <Typography className={classes.followers}>
            <span className={classes.following__count}>{9}</span> following
          </Typography>
        </Typography>
      </div>

      <div className={classes.user_bio}>
        <Typography variant="caption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          quam repellendus modi, pariatur
        </Typography>
      </div>
      <UserDetails username={username} createdAt={createdAt} />
      <hr />
      <Channels />
    </div>
  );
}

export default withStyles(styles)(SideBar);
