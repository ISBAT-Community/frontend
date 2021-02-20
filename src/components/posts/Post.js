import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { styles } from "./post.styles.module";
import PostProfilePic from "./PostProfilePic";
import Tooltip from "@material-ui/core/Tooltip";
import More from "./More";

function Post({ post: { body, createdAt, user }, classes }) {
  dayjs.extend(relativeTime);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.post}>
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
              <Tooltip
                style={{ background: "white !important" }}
                placement="top"
                title="More"
              >
                <MoreVertIcon onClick={handleClick} />
              </Tooltip>
              <More
                anchorEl={anchorEl}
                open={open}
                id={id}
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
}

export default withStyles(styles)(Post);
