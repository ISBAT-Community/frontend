import { colors } from "../constants/colors";

export const styles = {
  button: {
    alignItems: "center",
    display: "flex"
  },
  emoji_picker_container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    margin: "-53% 0 0 0"
  },
  form: {
    width: "100%",
    display: "flex",
    position: "relative",
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    padding: 10,
    width: "73%",
    display: "flex",
    color: colors.lightgray,
    borderRadius: 25,
    margin: "1rem 0 0 .5rem",
    background: "#ebedef",
    border: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
};
