import * as actionTypes from "./actonTypes";
import axios from "axios";

//Channel actionType creator
const fetchChannelStart = () => ({
  type: actionTypes.FETCH_CHANNEL_DATA_REQUEST
});

const fetchChannelSuccess = channelList => ({
  type: actionTypes.FETCH_CHANNEL_DATA_SUCCESS,
  channelList
});

const fetchChannelFail = error => ({
  type: actionTypes.FETCH_CHANNEL_DATA_FAIL,
  error: error
});

//channel action creator
export const fetchChannels = () => async dispatch => {
  try {
    dispatch(fetchChannelStart());
    const response = await axios.get("http://localhost:9090/channels");
    if (response.data) dispatch(fetchChannelSuccess(response.data));
  } catch (error) {
    dispatch(fetchChannelFail(error.message));
  }
};
