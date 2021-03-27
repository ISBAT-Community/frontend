import { colors } from "../constants/colors";
export const styles = {
  appBar: {
    height: 45,
    boxShadow: "none",
    justifyContent: "center",
    backgroundColor: colors.background_color
  },
  header_content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: "100%",
    display: "flex"
  },
  logo_text: {
    display: "flex",
    margin: "0 1rem",
    fontSize: "1.2rem",
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    fontWeight: "bold",
    textDecoration: "none",
    outlineWidth: 0,
    outline: "none"
  },
  toolbar: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  textInput: {
    color: colors.white,
    width: "50rem",
    padding: 4,
    fontSize: 14,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#ebedef",
    border: `1px solid ${colors.borderColor}`
    // boxShadow: `1px 2px 2px 2px ${colors.borderColor}`
  },
  left: {},
  notification: {
    fontSize: 14
  },
  profile_pic: {
    width: 60,
    height: 60
  }
};
