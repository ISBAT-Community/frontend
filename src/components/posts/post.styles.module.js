import { colors, font } from "../constants/colors";

export const styles = {
  post: {
    width: "100%",
    display: "flex",
    paddingLeft: 5
  },
  btn_thumbsUp: {
    fontSize: "1.2rem",
    color: "yellow",
    marginRight: 10,
    top: -13
  },
  btn_thumbsDown: {
    color: colors.lightgray,
    fontSize: "1.2rem"
  },
  badge: {
    padding: "0 2px",
    color: colors.lightgray
  },
  post_link: {
    textDecoration: "none"
  },
  // post_action: {
  //   marginRight: "1rem"
  // },
  emoji: {
    color: "gray"
  },
  post_body: {
    fontSize: "83%",
    width: "100%",
    color: colors.textColor
  },
  post_body_container: {
    maxWidth: 700,
    width: "100%",
    marginTop: "1%"
  },
  post_info: {
    display: "flex",
    margin: " 0 0 0.4rem 0",
    justifyContent: "space-between"
  },
  post_user: {
    display: "flex",
    alignItems: "center"
  },
  post_content: {
    fontSize: "0.8rem",
    marginRight: "1rem",
    fontFamily: font.fontFamily,
    justifyContent: "space-between"
  },
  post_timestamp: {
    fontSize: "0.7rem",
    fontFamily: font.fontFamily
  },

  posted_by: {
    fontSize: 15,
    color: colors.lightBlue,
    marginRight: "0.5rem",
    fontFamily: font.fontFamily
  },

  postLink: {
    width: "100%",
    color: "inherit",
    textDecoration: "none"
  },

  replyInputContainer: {
    width: "80%",
    display: "flex",
    border: "none",
    justifyContent: "space-between",
    padding: "0.3rem .5rem .3rem .5rem",
    borderRadius: 25,
    margin: "0 0 1rem 1rem",
    backgroundColor: colors.secondary_color
  },
  replyInput: {
    background: "none",
    border: "none",
    width: "100%",
    padding: "0 .5rem",
    fontSize: 14,
    fontFamily: font.fontFamily,
    color: colors.textColor
  },

  //post-dialog
  cancel: {
    cursor: "pointer",
    color: colors.white
  },
  dialog__header: {
    display: "flex",
    justifyContent: "space-between"
  },

  dialog_content: {
    display: "flex"
  },

  dialog_content_left: {
    width: "50%",
    height: 200,
    background: colors.borderColor
  },
  dialog_content_right: {
    width: "50%",
    height: 200,
    background: colors.orangeColor
  },

  dialog_actions: {
    display: "flex"
  },

  // dialog_action_left: {
  //   width: "50%"
  // },

  dialog_action_right: {
    width: "50%"
  }
};
