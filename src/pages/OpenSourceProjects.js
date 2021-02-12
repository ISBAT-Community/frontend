import { useState } from "react";

//Raect router dom staff
// import { Link } from "react-router-dom";

//MUI Stuff
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

//fonts and colors
import { colors, font } from "../components/constants/colors";

// Custom components
import MyAccount from "../components/settings/MyAccount";

const useStyles = makeStyles({
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
});

function OpenSourceProjects() {
  const [content, setContent] = useState("");

  const classes = useStyles();

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
                onClick={() => toggleContent("Projects")}
              >
                Projects
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
          {/* {content === "Notification" ? (
            <p>Notification</p>
          ) : content === "My Account" ? (
            <MyAccount />
          ) : (
            <MyAccount />
          )} */}
          this is a projects page
        </div>
      </div>
    </div>
  );
}

export default OpenSourceProjects;
