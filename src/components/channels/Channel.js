import * as React from "react";
import PropTypes from "prop-types";
import { styles } from "./channel.styles.module";
import SettingsIcon from "@material-ui/icons/Settings";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockIcon from "@material-ui/icons/Lock";
import { connect } from "react-redux";
import { changeChannel } from "../../redux/actions/ui";

const Channel = ({ classes, changeChannel, name, id, visibility }) => {
  const [state, setState] = React.useState({
    hover: null
  });

  const onMouseEnter = () => {
    setState({ ...state, hover: true });
  };

  const onMouseLeave = () => {
    setState({ ...state, hover: false });
  };

  const channelName = name.substring(0, 11);
  const visibility_access =
    visibility === "private" ? <LockIcon className={classes.lockIcon} /> : "#";

  const handleChannelOnClick = (e, id) => {
    e.preventDefault();
    changeChannel(id);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={state.hover ? classes.channel_hover : classes.channel}
    >
      <Link
        className={classes.user_channel_link}
        onClick={e => handleChannelOnClick(e, id)}
        to="#"
      >
        <Typography className={classes.user_channel_name}>
          {visibility_access} {channelName}
          {name.length > 10 ? "..." : ""}
        </Typography>
      </Link>
      <div className={classes.clannel_container}>
        <Link
          to={`/channel/${name}/settings/${id}`}
          className={classes.channel_settings}
        >
          <PersonAddIcon className={classes.settingIcon} />
        </Link>
        <Link
          to={`/channel/${name}/settings/${id}`}
          className={classes.channel_settings}
        >
          <SettingsIcon className={classes.settingIcon} />
        </Link>
      </div>
    </div>
  );
};

Channel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.object,
  visibility: PropTypes.string,
  changeChannel: PropTypes.func
};

const mapDispatchToProps = {
  changeChannel
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Channel));
