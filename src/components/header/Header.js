import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { colors } from "../constants/colors";
import "./style.css";

const useStyles = makeStyles({
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
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.header_content}>
          <div className="header--logo--searchInput">
            <div className={classes.logo}>
              <Link className={classes.logo_text} to="/">
                Discode
              </Link>
            </div>
            <div className="search--input">
              <input
                className={classes.textInput}
                type="text"
                autoFocus
                placeholder="Search.."
              />
            </div>
          </div>
          <div className={classes.left}>
            {/* <img className={classes.profile_pic} src={profile_pic} alt="C" /> */}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
