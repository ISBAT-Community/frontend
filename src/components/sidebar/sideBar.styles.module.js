import { colors, font } from "../constants/colors";

export const styles = {
  followers__following: {
    marginTop: 15,
    marginLeft: 10,
    display: "flex"
  },
  followers: {
    fontSize: ".8rem",
    marginRight: 15
  },
  followers__count: {
    fontWeight: 900,
    fontFamily: font.fontFamily
  },
  following__count: {
    fontWeight: 900,
    fontFamily: font.fontFamily
  },
  user_bio: {
    margin: 10
  },
  status: {
    position: "absolute",
    marginLeft: 60,
    marginTop: 60,
    width: 18,
    height: 18,
    borderRadius: 50,
    border: `1px solid ${colors.darkGrayColor}`,
    background: colors.lightergreen
  },
  SideBar: {
    width: "35%",
    maxWidth: 250,
    height: "100%",
    position: "stacky",
    marginRight: ".1rem",
    // marginLeft: "13.8%",
    background: "#fff",
    padding: "0 0 0 1rem",
    borderLeft: "1px solid #ddd",
    borderRight: "1px solid #ddd"
  },
  SideBar_fullname: {
    fontSize: ".8rem",
    fontWeight: "bold"
  },
  SideBar_username: {
    fontSize: ".7rem",
    color: colors.darkGrayColor
  },
  SideBar_userInfo: {
    display: "flex",
    marginRight: 10
  },
  SideBar_profilePic: {
    display: "flex",
    marginTop: 15,
    alignItems: "center"
  },
  SideBar_profilePic_img: {
    width: "80px",
    height: "80px",
    marginTop: "5%",
    objectFit: "cover",
    borderRadius: "50%"
  },
  editIcon: {
    margin: "-2rem 0 0 6rem",
    color: colors.lightYellowGreen
  }
};
