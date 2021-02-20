import { colors, font } from "../components/constants/colors";

export const styles = {
  actions: {
    padding: "5%"
  },
  appBar: {
    padding: "5%",
    color: colors.white,
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
  createdAt: {
    color: colors.darkGrayColor
  },
  container: {
    width: "85%"
  },
  follow: {
    color: colors.yelllowOrangeColor
  },
  friendRequest: {
    marginLeft: "1rem",
    color: colors.lightBlue
  },
  PostProfilePic: {
    display: "flex"
  },
  post_content: {
    display: "flex",
    padding: 10,
    borderRadius: 10,
    background: colors.dark_background_color
  },
  post_content_left: {
    // height: 200,
    width: "50%",
    display: "flex"
  },
  post_content_right: {
    width: "50%",
    // height: 200,
    marginLeft: 6
  },
  title: {
    marginLeft: 2
  },
  info: {
    marginTop: 10,
    marginLeft: "1rem",
    color: colors.textColor
  },
  posted_by: {
    display: "flex",
    marginBottom: ".3rem"
  },
  name: {
    fontSize: "1rem",
    marginRight: "1rem",
    color: colors.white,
    fontWeight: font.fontWeightBold
  },
  userFollowActions: {
    marginBottom: ".5rem"
  }
};
