import { styles } from "./channel.styles.module";
import SettingsIcon from "@material-ui/icons/Settings";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Channel = ({ classes, name, id }) => {
  const channelName = name.substring(0, 11);
  return (
    <div className={classes.channel}>
      <Link className={classes.user_channel_link} to="#">
        <Typography className={classes.user_channel_name}>
          # &nbsp; {channelName}
          {name.length > 10 ? "..." : ""}
        </Typography>
      </Link>
      <Link
        to={`/channel/${name}/settings/${id}`}
        className={classes.channel_settings}
      >
        <SettingsIcon className={classes.settingIcon} />
      </Link>
    </div>
  );
};

export default withStyles(styles)(Channel);
