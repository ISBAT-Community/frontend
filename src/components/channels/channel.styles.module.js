import { colors, font } from "../constants/colors";

export const styles = {
  channel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  user_channel_link: {
    textDecoration: "none",
    fontSize: ".6rem",
    fontWeight: "bolder",
    color: colors.textColor,
    fontFamily: font.fontFamily
  },
  user_channel_name: {
    width: "100%",
    fontSize: "0.9rem",
    textDecoration: "none",
    color: colors.textColor
  },
  channel_settings: {
    padding: 3,
    marginTop: ".5rem",
    color: colors.textColor
  },
  settingIcon: {
    fontSize: "100%",
    marginRight: ".8rem"
  }
};
