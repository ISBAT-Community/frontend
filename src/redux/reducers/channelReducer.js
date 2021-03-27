import * as actionTypes from "../actions/actonTypes";
import { mergeObjects } from "../utility";

const initialState = {
  channelList: [],
  singleChannelData: [],
  channelMessages: [],
  loading: false
};

//fetch all channels.
const fetchChannelDataStart = (state, action) =>
  mergeObjects(state, { loading: true, channelList: [] });

const fetchChannelDataSuccess = (state, action) =>
  mergeObjects(state, {
    loading: false,
    channelList: action.channelList
  });

const fatchChannelDataFail = (state, action) =>
  mergeObjects(state, { loading: true, error: action });

//fetch single channel data
const fetchSingleChannelDataStart = (state, action) =>
  mergeObjects(state, { loading: true, singleChannelData: [] });

const fetchSingleChannelDataSuccess = (state, action) =>
  mergeObjects(state, {
    loading: false,
    singleChannelData: action.singleChannelData
  });

const fetchSingleChannelDataFail = (state, action) =>
  mergeObjects(state, { loading: true, error: action });

//fetch channel messages
const fetchChannelMessagesStart = (state, action) =>
  mergeObjects(state, { loading: true, channelMessages: [] });

const fetchChannelMessagesSuccess = (state, action) =>
  mergeObjects(state, {
    loading: false,
    channelMessages: action.channelMessages
  });

const fetchChannelMessagesFail = (state, action) =>
  mergeObjects(state, { loading: false, error: action });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DATA_REQUEST:
      return fetchChannelDataStart(state, action);
    case actionTypes.FETCH_CHANNEL_DATA_SUCCESS:
      return fetchChannelDataSuccess(state, action);
    case actionTypes.FETCH_CHANNEL_DATA_FAIL:
      return fatchChannelDataFail(state, action);

    //Fetch Single Channel Data
    case actionTypes.FETCH_SINGLE_CHANNEL_DATA_REQUEST:
      return fetchSingleChannelDataStart(state, action);
    case actionTypes.FETCH_SINGLE_CHANNEL_DATA_SUCCESS:
      return fetchSingleChannelDataSuccess(state, action);
    case actionTypes.FETCH_SINGLE_CHANNEL_DATA_FAIL:
      return fetchSingleChannelDataFail(state, action);

    //fetching channel messages
    case actionTypes.FETCH_CHANNEL_MESSAGES_START:
      return fetchChannelMessagesStart(state, action);
    case actionTypes.FETCH_CHANNEL_MESSAGES_SUCCESS:
      return fetchChannelMessagesSuccess(state, action);
    case actionTypes.FETCH_CHANNEL_MESSAGES_FAIL:
      return fetchChannelMessagesFail(state, action);

    default:
      return state;
  }
};

export default reducer;
