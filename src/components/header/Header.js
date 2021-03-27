import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./style.css";
import { styles } from "./header.module";
import withStyles from "@material-ui/core/styles/withStyles";

const Header = ({ classes }) => (
  <AppBar className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <div className={classes.header_content}>
        <div className="header--logo--searchInput">
          <div className={classes.logo}>
            <Link className={classes.logo_text} to="/">
              Isbat community
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

export default withStyles(styles)(Header);
