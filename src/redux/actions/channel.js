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

//fetch single Channel actionType creator
const fetchSingleChannelStart = () => ({
  type: actionTypes.FETCH_CHANNEL_DATA_REQUEST
});

const fetchSingleChannelSuccess = singleChannelData => ({
  type: actionTypes.FETCH_CHANNEL_DATA_SUCCESS,
  singleChannelData
});

const fetchSingleChannelFail = error => ({
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

//fetch channel messages action creator
const fetchChannelMesssagesStart = () => ({
  type: actionTypes.FETCH_CHANNEL_MESSAGES_START
});

const fetchChannelMessagesSuccess = channelMessages => ({
  type: actionTypes.FETCH_CHANNEL_MESSAGES_SUCCESS,
  channelMessages
});

const fetchChannelMessagesFail = error => ({
  type: actionTypes.FETCH_CHANNEL_MESSAGES_FAIL,
  error: error
});

//create channel action creator
export const createChannel = channelData => async dispatch => {
  try {
    dispatch(createChannelStart());
    const response = await axios.post("/channels", channelData);
    dispatch(createChannelSuccess(response.data));
  } catch (error) {
    dispatch(createChannelFail(error.message));
  }
};

//fetch channel data action creator
export const fetchChannels = () => async dispatch => {
  try {
    dispatch(fetchChannelStart());
    const response = await axios.get("/channels");
    dispatch(fetchChannelSuccess(response.data));
  } catch (error) {
    dispatch(fetchChannelFail(error.message));
  }
};

//fetch single Channle data action creator
export const fetchSingleChannelData = Channel_id => async dispatch => {
  try {
    dispatch(fetchSingleChannelStart());
    const response = await axios.get(`/channels/${Channel_id}`);
    dispatch(fetchSingleChannelSuccess(response.data));
  } catch (error) {
    dispatch(fetchSingleChannelFail(error.message));
  }
};

//fetch channel messages
export const fetchChannelMessages = channel_id => async dispatch => {
  try {
    dispatch(fetchChannelMesssagesStart());
    const response = await axios.get(`/messages/${channel_id}`);
    dispatch(fetchChannelMessagesSuccess(response.data));
  } catch (error) {
    dispatch(fetchChannelMessagesFail(error.message));
  }
};
