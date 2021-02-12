import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import EmojiIcon from "@material-ui/icons/EmojiEmotions";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import { styles } from "./post.styles.module";
import PostProfilePic from "./PostProfilePic";
import Container from "@material-ui/core/Container";

function Post(props) {
  dayjs.extend(relativeTime);
  const {
    post: {
      body,
      createdAt,
      // like,
      _id,
      user
    },
    classes
  } = props;

  return (
    <Container className={classes.post}>
      <PostProfilePic userInfo={user} />
      <Link to={`/post/${_id}`} className={classes.postLink}>
        <div className={classes.post__content}>
          <div className={classes.post_info}>
            <div className={classes.post_user}>
              <h4 className={classes.posted_by}>{user.username}</h4>
              <span className={classes.post_timestamp}>
                {dayjs(createdAt).fromNow()}
              </span>
            </div>
            <div className={classes.post_action}>
              <EmojiIcon className={classes.emoji} />
              <MoreVertIcon />
            </div>
          </div>
          <div className={classes.post_body_container}>
            <Typography variant="inherit" className={classes.post_body}>
              {body}
            </Typography>
          </div>

          {/* <div className="post_actions">
          <input type="button" value="Reply" onClick={() => toggleInput(_id)} />
          <IconButton>
            <Badge className={classes.badge} badgeContent={like ? like : ""}>
              <ThumbsUpOutlinedIcon className={classes.btn_thumbsUp} />
            </Badge>
          </IconButton>
          <IconButton>
            <ThumbDownOutlinedIcon className={classes.btn_thumbsDown} />
          </IconButton>
        </div> */}
          {/* {replies ? (
          <div>
            <p>{replies}</p>
          </div>
        ) : (
          ""
        )} */}
          {/* {showReplyInput ? (
          <form action="/" method="POST">
            <div className={classes.replyInputContainer}>
              <AddIcon />
              <input
                type="text"
                placeholder="Say something"
                className={classes.replyInput}
              />
              <EmojiIcon />
            </div>
          </form>
        ) : (
          ""
        )} */}
        </div>
      </Link>
    </Container>
  );
}

export default withStyles(styles)(Post);
