import "./style.css";
import Post from "../posts/Post";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect, useRef } from "react";
import { Divider } from "@material-ui/core";
import PostLoading from "../posts/Post.loading";
import { styles } from "./postCard.styles.module";
import Typography from "@material-ui/core/Typography";
import { fetchPosts } from "../../redux/actions/post";
import withStyles from "@material-ui/core/styles/withStyles";

const PostCard = ({ fetchPosts, loading, post: { postList }, classes }) => {
  const fetchPostsRef = useRef(() => {});

  useEffect(() => {
    fetchPostsRef.current();
  }, []);

  fetchPostsRef.current = () => {
    fetchPosts();
  };

  return (
    <div className="post column">
      <div className={classes.post_content}>
        {loading ? (
          [...new Array(6)].map((x, index) => (
            <div key={index}>
              <PostLoading />
            </div>
          ))
        ) : postList.length <= 0 ? (
          <div className={classes.no_post}>
            <div style={{ width: "100%" }}>
              <Typography className={classes.text} variant="body1">
                Currently there are no posts to show
              </Typography>
            </div>
          </div>
        ) : (
          postList.map(post => (
            <div key={post._id}>
              <Post key={post._id} post={post} />
              <Divider className={classes.divider} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

//props types validation
PostCard.prototype = {
  post: PropTypes.object,
  loading: PropTypes.bool,
  classes: PropTypes.object,
  fetchPosts: PropTypes.func
};

const mapStateToProps = state => ({
  post: state.post,
  loading: state.post.loading
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PostCard));
