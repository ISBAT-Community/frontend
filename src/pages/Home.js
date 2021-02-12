import { Fragment, useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PostCard from "../components/card/PostCard";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Friends from "../components/friends/Friends.js";
import RightSIdeBarLoading from "../components/loading/RightSIdeBarLoading";
import { styles } from "./home.styles.module.js";
import axios from "axios";
import PostForm from "../components/posts/PostForm";

const Home = ({ classes }) => {
  const [logginUserDetails, setLogginUserDetails] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getUserData();
    fetchFriends();
  }, []);

  const getUserData = async () => {
    const logginUserInfo = await axios.get(`http://localhost:9090/user`);
    if (logginUserInfo) {
      setLogginUserDetails(logginUserInfo.data);
    }
  };

  const fetchFriends = async () => {
    const friends = await axios.get("http://localhost:9090/users");
    if (friends) {
      setFriends(friends.data);
    }
  };

  const { username, createdAt, bio, profilePic } = logginUserDetails;

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.rightSidebar}>
          {friends.length > 0 ? (
            <Friends friends={friends} />
          ) : (
            <RightSIdeBarLoading />
          )}
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
    </Fragment>
  );
};

export default withStyles(styles)(Home);
