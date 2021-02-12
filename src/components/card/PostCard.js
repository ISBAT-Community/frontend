import { useEffect, useRef } from "react";
import "./style.css";
import Post from "../posts/Post";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PostLoading from "../posts/Post.loading";
import { fetchPosts } from "../../redux/actions/post";
import { connect } from "react-redux";
import { styles } from "./postCard.styles.module";

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
          [...new Array(6)].map((ele, index) => <PostLoading key={index} />)
        ) : postList.length > 0 ? (
          postList.map(post => (
            <div key={post._id}>
              <Post key={post._id} post={post} />
              <hr />
            </div>
          ))
        ) : (
          <div className={classes.no_post}>
            <div style={{ width: "100%" }}>
              <Typography className={classes.text} variant="body1">
                Currently there are no posts to show
              </Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  post: state.post,
  loading: state.loading
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PostCard));
