import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
// import axios from "axios";
//custom components
import MyAccount from "../components/settings/MyAccount";
import { styles } from "./settings.styles.module";

function Settings({ classes }) {
  const [content, setContent] = useState("");

  const toggleContent = contentToDisplay => {
    setContent(contentToDisplay);
  };

  return (
    <div className={classes.settings}>
      <div className={classes.settings_container}>
        <div className={classes.sidebar}>
          <Typography className={classes.title}>User settings</Typography>
          <div className={classes.links_container}>
            <div>
              <button
                className={classes.links}
                onClick={() => toggleContent("My Account")}
              >
                My Account
              </button>
            </div>
            <button
              className={classes.links}
              onClick={() => toggleContent("Notification")}
            >
              Notification
            </button>
          </div>
        </div>
        <div className={classes.main_settings}>
          {content === "Notification" ? (
            <p>Notification</p>
          ) : content === "My Account" ? (
            <MyAccount />
          ) : (
            <MyAccount />
          )}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Settings);
