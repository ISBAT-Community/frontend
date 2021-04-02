import { colors, font } from "../constants/colors";

export const styles = {
  bio: {
    fontSize: ".7rem",
    fontWeight: 400,
    color: colors.darkGrayColor
  },
  friends_container: {
    width: "100%",
    height: "85vh",
    overflowY: "scroll",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: colors.whiteColor
  },
  link: {
    display: "flex",
    color: "inherit",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none"
  },
  user: {
    width: "100%",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
    margin: ".5rem 0"
  },
  name: {
    width: "100%",
    fontSize: ".8rem",
    display: "flex",
    fontWeight: 600,
    fontFamily: font.fontFamily,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 15,
    color: colors.black
  },
  members_status: {
    marginLeft: 30,
    color: colors.darkGrayColor
  },

  profilePic: {
    marginRight: 10
  },

  online: {
    width: 12,
    height: 12,
    borderRadius: 25,
    cursor: "pointer",
    backgroundColor: colors.lightergreen,
    // position: "absolute",
    margin: "1rem .6rem 0 -2.1rem",
    border: `1px solid ${colors.darkGrayColor} `
  },
  offline: {
    width: 12,
    height: 12,
    cursor: "pointer",
    borderRadius: 25,
    // position: "absolute",
    margin: "1rem .6rem 0 -2.1rem",
    border: `1px solid ${colors.darkGrayColor}`,
    backgroundColor: colors.redColor
  },
  tooltip: {
    fontSize: ".8rem",
    fontWeight: "bold"
  }
};
