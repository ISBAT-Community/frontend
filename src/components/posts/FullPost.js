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
// import Slide from "@material-ui/core/Slide";
import { colors } from "../constants/colors";
import PostProfilePic from "./PostProfilePic";
// import axios from "axios";

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

export default function FullScreenDialog({ match }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <div className={classes.btnClose__container}>
            <IconButton
              className={classes.closeBtn}
              edge="start"
              color="inherit"
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
            <PostProfilePic userInfo={user} />
          </div>
          <div className={classes.post_content_right}></div>
        </div>
      </Container>
    </Container>
  );
}
