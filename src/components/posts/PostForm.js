import { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { colors } from "../constants/colors";
import Button from "@material-ui/core/Button";
import axios from "axios";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const useStyles = makeStyles({
  button: {
    alignItems: "center",
    display: "flex"
  },
  form: {
    // marginTop: "3%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    padding: 10,
    width: "73%",
    display: "flex",
    color: colors.lightgray,
    borderRadius: 25,
    margin: "1rem 0 0 .5rem",
    // background: colors.secondary_color,
    background: "#ebedef",
    border: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
});

function PostForm() {
  const [msg, setMsg] = useState("");
  const classes = useStyles();

  const handleInput = value => {
    setMsg(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const postData = {
      body: msg
    };
    await axios.post("http://localhost:9090/posts", postData);
    setMsg("");
  };

  return (
    <form className={classes.form} action="/post" method="POST">
      <input
        type="text"
        name="msg"
        className={classes.textInput}
        placeholder="type something"
        autoFocus
        onChange={e => handleInput(e.target.value)}
      />
      <div>
        <AttachFileIcon />
        <Button
          className={classes.button}
          onClick={e => handleSubmit(e)}
          type="submit"
        >
          post
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
