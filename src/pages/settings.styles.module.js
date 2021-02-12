import { colors, font } from "../components/constants/colors";

export const styles = {
  links: {
    border: "none",
    background: "none",
    cursor: "pointer",
    margin: "5px 1rem",
    outlineStyle: "none",
    outlineWidth: 0,
    color: colors.textColor
  },
  links_container: {
    marginTop: "1rem"
  },
  settings: {
    width: "100%"
  },
  settings_container: {
    width: "67%",
    display: "flex",
    margin: "3rem auto"
  },
  sidebar: {
    width: "20%",
    height: "90vh",
    borderRight: `1px solid ${colors.secondary_color}`
  },
  main_settings: {
    width: "100%",
    padding: ".3rem 1.5rem"
  },
  title: {
    color: colors.white,
    fontFamily: font.fontFamily
  }
};
