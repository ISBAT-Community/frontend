import { colors, font } from "../components/constants/colors";

export const styles = {
  bottom: {
    width: "50%",
    display: "flex",
    height: "0",
    position: "fixed",
    justifyContent: "flex",
    background: colors.background_color
  },
  container: {
    width: "90%",
    display: "flex",
    margin: "3rem auto"
  },

  main: {
    width: "100%",
    backgroundColor: colors.background_color,
    // justifyContent: "flex-start",
    margin: "0 1rem 3rem 0"
  },
  main_content: {
    // display: "flex",
    width: "100%",
    margin: "0 0 0.5rem 0",
    // justifyContent: "space-between"
    alignItems: "center"
  },
  main_content_title: {
    color: colors.white,
    padding: "0.8rem",
    fontWeight: 900,
    fontFamily: font.fontFamily
  },
  main_column: {
    height: "80vh",
    display: "flex",
    overflowY: "scroll",
    scrollBehavior: "smooth"
  },
  rightSidebar: {
    width: "25%"
  }
};
