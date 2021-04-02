import React from "react";
import More from "../posts/More";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import PostAction from "../posts/PostAction";
import { styles } from "../posts/post.styles.module";
import PostProfilePic from "../posts/PostProfilePic";
import Tooltip from "@material-ui/core/Tooltip";
import relativeTime from "dayjs/plugin/relativeTime";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import withStyles from "@material-ui/core/styles/withStyles";

const Message = props => {
  const { _id, body, createdAt, user, classes } = props;

  dayjs.extend(relativeTime);

  const [state, setState] = React.useState({
    hover: null,
    anchorEl: null
  });

  const handleClick = event => {
    event.preventDefault();
    setState({ ...state, anchorEl: event.currentTarget });
  };

  const handleClose = () => {
    setState({ ...state, anchorEl: null });
  };

  const open = Boolean(state.anchorEl);
  const id = open ? "simple-popover" : undefined;

  const onMouseEnter = () => {
    setState(preState => ({ ...preState, hover: true }));
  };

  const onMouseLeave = () => {
    setState(prevState => ({ ...prevState, hover: false }));
  };

  return (
    <div
      className={classes.post}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <PostProfilePic userInfo={user} />
      <div className={classes.postLink}>
        <div className={classes.post__content}>
          <div className={classes.post_info}>
            <div className={classes.post_user}>
              <h4 className={classes.posted_by}>{user.username}</h4>
              <span className={classes.post_timestamp}>
                {dayjs(createdAt).fromNow()}
              </span>
            </div>
            <div className={classes.post_action}>
              {state.hover ? <PostAction /> : ""}
              <Tooltip placement="top" title="More action">
                <MoreVertIcon
                  onClick={handleClick}
                  className={classes.moreOptions}
                />
              </Tooltip>
              <More
                anchorEl={state.anchorEl}
                open={open}
                id={id}
                message_id={_id}
                handleClose={handleClose}
              />
            </div>
          </div>
          <div className={classes.post_body_container}>
            <Typography variant="inherit" className={classes.post_body}>
              {body}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

// props type validation
Message.prototype = {
  classes: PropTypes.object
};

export default withStyles(styles)(Message);
