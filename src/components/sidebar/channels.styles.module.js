import { colors, font } from "../constants/colors";

export const styles = {
  addChannel: {
    color: colors.textColor
  },
  channels: {
    width: "100%",
    minWidth: 170
  },
  channels_title_action: {
    display: "flex",
    alignItems: "center",
    color: colors.white,
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
    // overflow: "scroll",
    height: "250px",
    overflowX: "hidden"
  }
};
