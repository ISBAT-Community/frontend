import { colors, font } from "../constants/colors";

export const styles = {
  post_content: {
    width: "100%",
    margin: "0 auto"
  },
  no_post: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.textColor,
    justifyContent: "center",
    fontFamily: font.fontFamily
  },
  divider: {
    background: "#f2f3f5",
    marginTop: "1rem",
    marginBottom: ".5rem"
  }
};
