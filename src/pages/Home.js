import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PostCard from "../components/card/PostCard";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Friends from "../components/friends/Friends.js";
import { styles } from "./home.styles.module.js";
import PostForm from "../components/posts/PostForm";
import { connect } from "react-redux";
import { fetchUserData } from "../redux/actions/user";

const Home = ({ classes, fetchUserData, loggedInUser }) => {
  const fetchUserDataRef = React.useRef(() => {});
  React.useEffect(() => {
    fetchUserDataRef.current();
  }, []);

  fetchUserDataRef.current = () => {
    fetchUserData();
  };

  const { username, createdAt, bio, profilePic } = loggedInUser;
  return (
    <React.Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.leftSidebar}>
          <Friends />
        </div>
        <SideBar
          username={username}
          createdAt={createdAt}
          bio={bio}
          profilePic={profilePic}
        />
        <div className={classes.main}>
          <div className={classes.main_content}>
            <Typography className={classes.main_content_title} variant="body2">
              {"# General"}
            </Typography>
          </div>
          <div className={classes.main_column}>
            <PostCard />
          </div>

          <div className={classes.bottom}>
            <PostForm />
          </div>
        </div>
        <div className={classes.rightSidebar}>Right Side Bar</div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  loggedInUser: state.user.userData
});

const mapDispatchToProps = {
  fetchUserData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
