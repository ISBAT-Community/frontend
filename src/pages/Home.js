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
import { fetchChannelMessages } from "../redux/actions/channel";
import axios from "axios";
import NoMessages from "../components/loading/NoMessages";
import Message from "../components/message/Message";
import Divider from "@material-ui/core/Divider";

const Home = ({
  classes,
  channel_id,
  isOpen,
  // singleChannelData,
  fetchUserData,
  loggedInUser
}) => {
  const [state, setState] = React.useState({
    singleChannelData: {}
  });

  const [channelMessages, setChannelMessages] = React.useState([]);

  const { name } = state.singleChannelData;

  const channelName = name;

  const { username, createdAt, bio, profilePic } = loggedInUser;

  const fetchUserDataRef = React.useRef(() => {});
  const fetchChannelDataRef = React.useRef(() => {});
  // const fetchSingleChannelDataRef = React.useRef(() => {});
  const fetchChannelMessagesRef = React.useRef(() => {});
  const fetchSpecificChannelMessagesRef = React.useRef(() => {});

  React.useEffect(() => {
    fetchUserDataRef.current();
    fetchChannelMessagesRef.current(channel_id);
    fetchChannelDataRef.current(channel_id);
    fetchSpecificChannelMessagesRef.current();
    // fetchSingleChannelDataRef.current(channel_id);
  }, [channel_id]);

  fetchUserDataRef.current = () => {
    fetchUserData();
  };

  fetchSpecificChannelMessagesRef.current = () => {
    fetchSpecificChannelMessages();
  };

  // fetchSingleChannelDataRef.current = () => {
  //   fetchSingleChannelData(channel_id);
  // };

  fetchChannelMessagesRef.current = () => {
    fetchChannelMessages(channel_id);
  };

  fetchChannelMessagesRef.current = () => {
    fetchChannelMessages(channel_id);
  };

  fetchChannelDataRef.current = () => {
    fetchChannelData(channel_id);
  };

  const fetchChannelData = () => {
    if (channel_id !== undefined && channel_id !== null) {
      axios.get(`/channels/${channel_id}`).then(response => {
        setState({ ...state, singleChannelData: response.data });
      });
    }
  };

  const fetchSpecificChannelMessages = () => {
    try {
      axios.get(`/messages/${channel_id}`).then(response => {
        setChannelMessages(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          {isOpen ? (
            <React.Fragment>
              <div className={classes.main_content}>
                <Typography
                  className={classes.main_content_title}
                  variant="body2"
                >
                  {channelName === undefined ? "loading.." : "# " + channelName}
                </Typography>
              </div>
              <div className={classes.main_column}>
                <div className={classes.message}>
                  {channelMessages.length > 0 ? (
                    channelMessages ? (
                      channelMessages.map(message => (
                        <React.Fragment key={message._id}>
                          <Message
                            user={message.user}
                            body={message.body}
                            _id={message._id}
                            createdAt={message.createdAt}
                          />
                          <Divider className={classes.divider} />
                        </React.Fragment>
                      ))
                    ) : (
                      <p>Hi there</p>
                    )
                  ) : (
                    <NoMessages name={channelName} />
                  )}
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={classes.main_content}>
                <Typography
                  className={classes.main_content_title}
                  variant="body2"
                >
                  {"# General"}
                </Typography>
              </div>
              <div className={classes.main_column}>
                <PostCard />
              </div>
            </React.Fragment>
          )}
          <div className={classes.bottom}>
            <PostForm channelName={channelName} channelId={channel_id} />
          </div>
        </div>
        <div className={classes.rightSidebar}>Right Side Bar</div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  loggedInUser: state.user.userData,
  channel_id: state.UI.channel_id,
  isOpen: state.UI.isOpen,
  singleChannelData: state.channel.singleChannelData
});

const mapDispatchToProps = {
  fetchUserData,
  fetchChannelMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
