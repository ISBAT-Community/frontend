import { colors } from "../components/constants/colors";

export const styles = {
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      borderRadius: 25,
      background: colors.secondary_color,
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      borderRadius: 25,
      background: colors.dark_background_color
    }
  },

  bottom: {
    width: "50%",
    display: "flex",
    height: "0",
    position: "fixed",
    justifyContent: "flex",
    background: colors.background_color
  },
  container: {
    width: "85%",
    maxWidth: "1300px",
    minWidth: 1070,
    height: "100vh",
    display: "flex",
    margin: "0 auto",
    paddingTop: "3.5%",
    position: "relative"
  },

  //Message Styles
  message: {
    width: "100%",
    padding: ".5rem",
    display: "flex",
    flexDirection: "column"
  },

  divider: {
    margin: 10
  },

  leftSidebar: {
    width: "30%",
    maxWidth: 250,
    paddingTop: "2%",
    background: colors.background_color
  },
  main: {
    width: "100%",
    marginLeft: "16.5%",
    backgroundColor: colors.background_color
  },
  main_content: {
    // display: "flex",
    width: "100%",
    margin: "0 0 0.5rem 0",
    // justifyContent: "space-between"
    alignItems: "center"
  },
  main_content_title: {
    // color: colors.white,
    padding: ".8rem",
    fontWeight: 900,
    fontSize: "1rem"
    // fontFamily: font.fontFamily
  },
  main_column: {
    width: "100%",
    height: "80vh",
    display: "flex",
    overflowY: "scroll",
    scrollBehavior: "smooth"
  },
  rightSidebar: {
    width: "25%"
  }
};
