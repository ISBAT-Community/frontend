import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./friend.styles.module";
import Typography from "@material-ui/core/Typography";
import PostProfilePic from "../posts/PostProfilePic";
import RightSideBarLoading from "../loading/RightSIdeBarLoading";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchFriends } from "../../redux/actions/friends";

function Friends({ classes, fetchFriends, friendList, loading }) {
  const fetchFriendRef = React.useRef(() => {});

  React.useEffect(() => {
    fetchFriendRef.current();
  }, []);

  fetchFriendRef.current = () => {
    fetchFriends();
  };

  return (
    <div className="actions column">
      <div className={classes.members_status}>
        <Typography>People</Typography>
        <Typography variant="caption">Online__</Typography>
      </div>
      <div className={classes.friends_container}>
        {!loading ? (
          friendList.map(friend => (
            <div key={friend._id} className={classes.user}>
              <div className={classes.profilePic}>
                <PostProfilePic userInfo={friend} />
              </div>
              <Typography className={classes.name} variant="caption">
                <Tooltip
                  placement="right-start"
                  title={
                    friend.status === "offline" ? (
                      <p className={classes.tooltip}>Offline</p>
                    ) : (
                      <p className={classes.tooltip}>Online</p>
                    )
                  }
                >
                  <div
                    className={
                      friend.status === "offline"
                        ? classes.offline
                        : classes.online
                    }
                  ></div>
                </Tooltip>
                <div>
                  {friend.username}
                  <p className={classes.bio}>{friend.bio && friend.bio}</p>
                </div>
              </Typography>
            </div>
          ))
        ) : (
          <RightSideBarLoading />
        )}
      </div>
    </div>
  );
}

Friends.propTypes = {
  loading: PropTypes.bool,
  friendList: PropTypes.array
};

const mapStateToProps = state => ({
  friendList: state.friend.friendList,
  loading: state.friend.loading
});

const mapDispatchToProps = {
  fetchFriends
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Friends));
