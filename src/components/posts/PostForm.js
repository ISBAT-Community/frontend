import { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { colors } from "../constants/colors";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles({
  button: {
    alignItems: "center",
    display: "flex"
  },
  form: {
    marginTop: "3%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    padding: 10,
    width: "80%",
    display: "flex",
    color: colors.lightgray,
    background: colors.secondary_color,
    border: `1px solid ${colors.secondary_color}`
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
      <Button
        className={classes.button}
        onClick={e => handleSubmit(e)}
        type="submit"
      >
        post
      </Button>
    </form>
  );
}

export default PostForm;
