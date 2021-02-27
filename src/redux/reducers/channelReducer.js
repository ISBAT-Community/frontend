import * as actionTypes from "../actions/actonTypes";
import { mergeObjects } from "../utility";

const initialState = {
  channelList: [],
  loading: false
};

//fetch channel.
const fetchChannelDataStart = (state, action) => {
  return mergeObjects(state, { loading: true, channelList: [] });
};

const fetchChannelDataSuccess = (state, action) => {
  return mergeObjects(state, {
    loading: false,
    channelList: action.channelList
  });
};

const fatchChannelDataFail = (state, action) => {
  return mergeObjects(state, { loading: false });
};

//create channel
// const createChannelStart = (state, action) => {
//   return mergeObjects(state, {loading: true})
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DATA_REQUEST:
      return fetchChannelDataStart(state, action);
    case actionTypes.FETCH_CHANNEL_DATA_SUCCESS:
      return fetchChannelDataSuccess(state, action);
    case actionTypes.FETCH_CHANNEL_DATA_FAIL:
      return fatchChannelDataFail(state, action);
    default:
      return state;
  }
};

export default reducer;
