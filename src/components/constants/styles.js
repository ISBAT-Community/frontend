import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { colors } from "./colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.background_color
    },
    secondary: {
      main: colors.darklightblue,
      contrastText: "#ffcc00"
    }
  }
});
