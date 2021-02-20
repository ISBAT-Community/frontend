import Modal from "../Modal";
import Channel from "../channels/Channel";
import { useEffect, useRef } from "react";
import { styles } from "./channels.styles.module";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import LoadingChanel from "../channels/LoadingChannel";
import { connect } from "react-redux";
import { fetchChannels } from "../../redux/actions/channel";

function Channels({ fetchChannels, channels, loading, classes }) {
  useEffect(() => {
    fetchChannelsRef.current();
  }, []);

  const fetchChannelsRef = useRef(() => {});
  fetchChannelsRef.current = () => {
    fetchChannels();
  };

  return (
    <div className={classes.channels}>
      <div className={classes.channels_title_action}>
        <Typography className={classes.channel_title} variant="body2">
          Channels
        </Typography>
        <Modal title="Create New Channel" />
      </div>
      <div className={classes.user_channel_container}>
        {loading
          ? "Your don't have channel yet"
          : channels.length > 0
          ? channels.map(channel => (
              <Channel name={channel.name} id={channel._id} key={channel._id} />
            ))
          : [...new Array(7)].map((ele, index) => (
              <LoadingChanel key={index} />
            ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  channels: state.channel.channelList,
  loading: state.loading
});

const mapDispatchToProps = {
  fetchChannels
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Channels));
