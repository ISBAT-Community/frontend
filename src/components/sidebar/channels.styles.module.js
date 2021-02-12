import { colors, font } from "../constants/colors";

export const styles = {
  addChannel: {
    color: colors.textColor
  },
  channels: {
    width: "100%",
    paddingTop: ".5rem",
    marginBottom: "1rem"
  },
  channels_title_action: {
    display: "flex",
    alignItems: "center",
    color: colors.white,
    marginBottom: "1rem",
    justifyContent: "space-between"
  },
  channel_title: {
    fontSize: "1rem",
    fontWeight: "bolder",
    fontFamily: font.fontFamily
  },
  user_channel: {
    display: "flex",
    justifyContent: "space-between"
  },
  user_channel_container: {
    overflow: "scroll",
    overflowX: "scroll",
    height: "250px",
    overflowX: "hidden"
  }
};
