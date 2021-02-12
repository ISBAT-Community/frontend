import { colors, font } from "../constants/colors";

export const styles = {
  button: {
    width: "20%",
    fontSize: "80%",
    color: colors.white,
    marginLeft: "1.5rem",
    textTransform: "capitalize",
    background: colors.secondary_color
  },
  icon: {
    marginRight: ".5rem"
  },
  textInputContainer: {
    display: "flex",
    padding: "0 1.5rem",
    flexDirection: "column"
  },
  label: {
    fontSize: ".8rem",
    fontWeight: "bold",
    color: colors.lightgray,
    fontFamily: font.fontFamily
  },
  myAccount: {
    width: "100%"
  },
  myAccount_title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: colors.white,
    fontFamily: font.fontFamily
  },
  myAccount_content: {
    marginTop: "2rem"
  },
  userInfo: {
    width: "80%",
    borderRadius: 5
    //  background: colors.background_color
  },
  profilePic: {
    width: "80%",
    margin: "0 0 1.5rem 1.5rem"
  },
  userInfo_details: {
    padding: "0rem 1rem",
    color: colors.textColor
  },
  input: {
    width: "80%",
    border: "none",
    fontSize: "90%",
    background: "none",
    color: colors.white,
    fontFamily: font.fontFamily,
    borderBottom: `1px solid ${colors.secondary_color}`
  },
  textInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inputDisabled: {
    width: "80%",
    border: "none",
    fontSize: "90%",
    background: "none",
    opacity: 0.6,
    color: colors.white,
    fontFamily: font.fontFamily,
    borderBottom: `1px solid ${colors.secondary_color}`
  },
  editBtn: {
    color: colors.textColor
  },
  profilePic_img: {
    width: 100,
    height: 100,
    objectFit: "contain",
    borderRadius: "50%"
  }
};
