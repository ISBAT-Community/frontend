import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ThumbsUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import PostProfilePic from "../components/posts/PostProfilePic";
import { styles } from "./singlePost.styles.module";
// import { connect } from "react-redux";
// import { fetchSinglePostData } from "../redux/actions/post";
import axios from "axios";

function SinglePost({ classes, match, history }) {
  const [singlePost, setSinglePost] = React.useState({});
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = React.useState(null);

  const _id = match.params.id;

  React.useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:9090/post/${_id}`).then(({ data }) => {
      setSinglePost(data);
      axios.get(`http://localhost:9090/user/${data.user}`).then(({ data }) => {
        setUserData(data);
        setLoading(false);
      });
    });
  }, [_id]);

  return (
    <Slide direction="up" in={true}>
      <Container className={classes.container}>
        <div className={classes.appBar}>
          <Toolbar>
            <div className={classes.btnClose__container}>
              <IconButton
                className={classes.closeBtn}
                edge="start"
                color="inherit"
                onClick={history.goBack}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              ESC
            </div>
          </Toolbar>
        </div>
        <Container className={classes.container}>
          {loading ? (
            "loading..."
          ) : (
            <div className={classes.post_content}>
              <div className={classes.post_content_left}>
                <div className={classes.PostProfilePic}>
                  <PostProfilePic userInfo={userData} />
                </div>
                <div>
                  <div className={classes.info}>
                    <div className={classes.posted_by}>
                      <Typography className={classes.name} variant="body2">
                        {userData.username}
                      </Typography>
                      <Typography
                        className={classes.createdAt}
                        variant="caption"
                      >
                        {singlePost.createdAt}
                      </Typography>
                    </div>

                    <div className={classes.userFollowActions}>
                      <Typography
                        className={classes.follow}
                        component={Link}
                        to="#"
                        variant="body2"
                      >
                        Follow
                      </Typography>
                      <Typography
                        className={classes.friendRequest}
                        component={Link}
                        to="#"
                        variant="body2"
                      >
                        send friend request
                      </Typography>
                    </div>

                    <Typography variant="body2">{singlePost.body}</Typography>
                  </div>
                  <div className={classes.actions}>
                    <ThumbsUpOutlinedIcon />
                    <ThumbDownOutlinedIcon />
                  </div>
                </div>
              </div>

              <div className={classes.post_content_right}></div>
            </div>
          )}
        </Container>
      </Container>
    </Slide>
  );
}

export default withStyles(styles)(SinglePost);
