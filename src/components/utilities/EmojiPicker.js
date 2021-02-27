import React from "react";
import Picker from "emoji-picker-react";
import withStyles from "@material-ui/core/styles/withStyles";

const EmojiPicker = ({ classes, id, open, anchorEl, handleClose }) => {
  const [state, setState] = React.useState({
    chosenEmoji: null
  });

  const onEmojiClick = (event, emojiObject) => {
    setState({ ...state, chosenEmoji: emojiObject });
  };

  const styles = {};

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        className={classes.popover}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Paper className={classes.paper}>
          {state.chosenEmoji ? (
            <span>You chose: {state.chosenEmoji.emoji}</span>
          ) : (
            <span>No emoji Chosen</span>
          )}
          <Picker onEmojiClick={onEmojiClick} />
        </Paper>
      </Popover>
    </div>
  );
};

export default withStyles(styles)(EmojiPicker);
