import { colors, font } from "../constants/colors";

export const styles = {
  friends_container: {
    width: "100%",
    height: "85vh",
    overflowY: "scroll",
    marginTop: 10,
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
    paddingLeft: 10
  },
  members_status: {
    paddingLeft: 10,
    color: colors.yelllowOrangeColor
  },
  online: {
    width: 12,
    height: 12,
    borderRadius: 25,
    cursor: "pointer",
    backgroundColor: colors.lightergreen,
    // position: "absolute",
    margin: "1rem 0 0 -1.3rem",
    border: "2px solid #343434"
  },
  offline: {
    width: 12,
    height: 12,
    cursor: "pointer",
    borderRadius: 25,
    // position: "absolute",
    margin: "1rem 0 0 -1.3rem",
    border: "2px solid #343434",
    backgroundColor: colors.red
  },
  tooltip: {
    fontSize: ".8rem",
    fontWeight: "bold"
  }
};
