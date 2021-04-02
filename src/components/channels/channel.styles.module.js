import { colors, font } from "../constants/colors";

export const styles = {
  channel: {
    display: "flex",
    alignItems: "center",
    margin: "5px 1rem 0 10px",
    padding: 3,
    justifyContent: "space-between"
  },

  lockIcon: {
    marginRight: 4,
    fontSize: "1rem",
    color: colors.darkGrayColor
  },

  channel_hover: {
    display: "flex",
    alignItems: "center",
    marginTop: 5,
    borderRadius: 5,
    padding: 3,
    color: "#000",
    margin: "5px 1rem 0 10px",
    background: colors.borderColor,
    justifyContent: "space-between"
  },

  channel_container: {
    marginTop: 4
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
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: colors.textColor
  },
  channel_settings: {
    marginTop: ".5rem",
    color: colors.textColor
  },
  settingIcon: {
    fontSize: "100%",
    marginRight: ".4rem"
  }
};
