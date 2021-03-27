import { colors, font } from "../components/constants/colors";

export const styles = {
  dot: {
    fontSize: "1rem",
    fontWeight: "bolder"
  },
  error: {
    color: colors.error
  },

  logo: {
    width: 130
  },

  // layout: {
  //   display: "flex",
  //   textAlign: "center",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },

  register: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    // background: colors.dark_background_color
  },
  main__register_contianer: {
    width: "27%",
    display: "flex",
    background: colors.background_color,
    boxShadow: `0 2px 10px 0 rgba(0,0,0,.2)`
  },
  register__container: {
    width: "100%",
    borderRadius: 10,
    justifyContent: "center"
  },
  inputField: {
    fontSize: ".95rem",
    fontFamily: font.fontFamily,
    color: `${colors.darkGrayColor}!important`,
    margin: ".3rem 0",
    border: `1px solid ${colors.borderColor} !important`
  },

  inputFieldWithBorder: {
    fontSize: ".95rem",
    fontFamily: font.fontFamily,
    color: `${colors.darkGrayColor}!important`,
    margin: ".3rem 0",
    border: `1px solid ${colors.lightBlue} !important`
  },
  form: {
    width: "90%",
    margin: "1rem auto",
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginTop: ".4rem",
    color: `${colors.textColor} !important`,
    fontSize: ".9rem",
    textTransform: "capitalize"
  },
  button: {
    margin: "1rem 0",
    color: `${colors.whiteColor} !important`,
    fontWeight: "bold",
    background: `${colors.lightBlue} !important`,
    textTransform: "capitalize"
  },
  link: {
    fontSize: "80%",
    color: colors.lightBlue,
    textDecoration: "none"
  },
  link_2: {
    fontSize: "80%",
    color: colors.lightBlue
  },
  policy: {
    marginTop: "1rem",
    color: colors.darkGrayColor
  },
  formHeader: {
    display: "flex",
    paddingTop: "15%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: colors.white,
    fontFamily: font.fontFamily
  },
  subtitle: {
    width: "70%",
    textAlign: "center",
    color: colors.darkGrayColor
  },
  underlines: {
    color: colors.lightBlue
  },

  usernumber: {
    color: colors.lightBlue,
    fontWeight: "bold"
  }
};
