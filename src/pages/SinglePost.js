import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { colors } from "../components/constants/colors";
import PostProfilePic from "../components/posts/PostProfilePic";
import { connect } from "react-redux";
import { fetchSinglePostData } from "../redux/actions/post";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  appBar: {
    padding: "5%",
    position: "relative",
    boxShadow: "none"
  },
  btnClose__container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  closeBtn: {
    float: "right",
    marginBottom: 5,
    border: `1px solid ${colors.white}`
  },
  container: {
    width: "85%"
  },
  post_content: {
    display: "flex"
  },
  post_content_left: {
    width: "50%",
    height: 200,
    background: colors.white
  },
  post_content_right: {
    width: "50%",
    height: 200,
    marginLeft: 6,
    background: colors.white
  },
  title: {
    marginLeft: theme.spacing(2)
  }
}));

function SinglePost({ match, history }) {
  const fetchSinglePostRef = React.useRef(() => {});
  const classes = useStyles();

  const [singlePost, setSinglePost] = React.useState([]);

  const {
    user: { username }
  } = singlePost;

  const _id = match.params.id;

  fetchSinglePostRef.current = () => {
    fetchSinglePostData(_id);
  };

  React.useEffect(() => {
    fetchData();
    fetchSinglePostRef.current();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:9090/post/${_id}`)
      .then(res => setSinglePost(res.data));
  };

  return (
    <Slide direction="up" in={true}>
      <Container className={classes.container}>
        <AppBar className={classes.appBar}>
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
        </AppBar>
        <Container className={classes.container}>
          <div className={classes.post_content}>
            <div className={classes.post_content_left}>
              <p>{username}</p>
            </div>
            <div className={classes.post_content_right}></div>
          </div>
        </Container>
      </Container>
    </Slide>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  singlePost: state.post
});

const mapDispatchToProps = {
  fetchSinglePostData
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
