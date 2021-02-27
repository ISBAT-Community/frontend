import * as actionTypes from "./actonTypes";
import axios from "axios";

//fetch Channel actionType creator
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

//create channel actionType creator
const createChannelStart = () => ({
  type: actionTypes.CREATE_CHANNEL_REQUEST
});

const createChannelSuccess = channel => ({
  type: actionTypes.CREATE_CHANNEL_SUCCESS,
  channel
});

const createChannelFail = error => ({
  type: actionTypes.CREATE_CHANNEL_FAIL,
  error
});

//create channel action creator
export const createChannel = channelData => async dispatch => {
  try {
    dispatch(createChannelStart());
    const response = await axios.post(
      "http://localhost:9090/channels",
      channelData
    );
    dispatch(createChannelSuccess(response.data));
  } catch (error) {
    dispatch(createChannelFail(error.message));
  }
};

//fetch channel action creator
export const fetchChannels = () => async dispatch => {
  try {
    dispatch(fetchChannelStart());
    const response = await axios.get("http://localhost:9090/channels");
    dispatch(fetchChannelSuccess(response.data));
  } catch (error) {
    dispatch(fetchChannelFail(error.message));
  }
};
