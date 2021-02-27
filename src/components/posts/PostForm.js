import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import EmojiPicker from "emoji-picker-react";
import Button from "@material-ui/core/Button";
import { styles } from "./postForm.styles.module";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import withStyles from "@material-ui/core/styles/withStyles";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";

const PostForm = ({ classes }) => {
  const [state, setState] = useState({
    msg: "",
    emojiPicker: null
  });

  const handleInput = value => {
    setState({ ...state, msg: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const postData = {
      body: state.msg
    };
    await axios.post("http://localhost:9090/posts", postData);
    setState({ ...state, msg: "" });
  };

  const handleOnOpenEmojiPicker = () => {
    setState(prevState => ({
      ...prevState,
      emojiPicker: !prevState.emojiPicker
    }));
  };

  return (
    <form className={classes.form} action="/post" method="POST">
      <div className={classes.emoji_picker_container}>
        {state.emojiPicker ? <EmojiPicker /> : ""}
      </div>
      <InsertEmoticonOutlinedIcon onClick={handleOnOpenEmojiPicker} />
      <input
        type="text"
        name="msg"
        className={classes.textInput}
        placeholder="type something"
        autoFocus
        value={state.msg}
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
};

//prop Types validation
PostForm.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(PostForm);
