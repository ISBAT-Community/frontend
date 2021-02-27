import { colors, font } from "../constants/colors";

export const styles = {
  btn: {
    fontSize: ".8rem",
    textTransform: "capitalize",
    color: colors.lightgray
  },
  addChannel: {
    color: colors.lightgray
  },
  btn_post: {
    color: colors.lightgray,
    marginRight: "1rem",
    background: "#fff"
  },
  btn__create: {
    fontSize: "90%",
    textTransform: "capitalize",
    color: colors.whiteColor,
    background: `${colors.lightBlue}!important`
  },
  dialogTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    fontSize: "1.3rem",
    color: colors.black,
    fontWeight: "bold",
    justifyContent: "flex-start",
    fontFamily: font.fontFamily
  },
  form: {
    width: "100%"
  },
  description: {
    color: colors.lightgray,
    fontSize: ".8rem",
    paddingBottom: "1rem"
  },
  inputField: {
    width: "100%",
    fontSize: ".95rem",
    fontFamily: font.fontFamily,
    color: colors.textColor,
    margin: ".3rem 0",
    background: colors.background_color,
    border: `1px solid ${colors.borderColor}`
  },
  label: {
    marginTop: ".4rem",
    color: `${colors.textColor} !important`,
    fontSize: ".8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    zIndex: 10,
    textTransform: "capitalize"
  },
  newChannel: {
    fontSize: "90%",
    fontWeight: "bold",
    color: colors.lightBlue,
    background: `#fff !important`,
    textTransform: "capitalize"
  },
  subdesc: {
    marginLight: 10,
    color: colors.darkGrayColor
  },
  private_channel: {
    display: "flex",
    color: colors.black,
    alignItems: "center"
  },
  lockIcon: {
    marginRight: 4,
    fontSize: "1.2rem",
    color: colors.darkGrayColor
  },
  private_channel_container: {
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  dialog_action: {
    marginRight: 10
  }
};
