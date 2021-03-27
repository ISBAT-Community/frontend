import * as actionTypes from "../actions/actonTypes";
import { mergeObjects } from "../utility";

const initialState = {
  isOpen: false,
  channel_id: ""
};

const OpenChannelStart = (state, action) => {
  return mergeObjects(state, { isOpen: false, channel_id: "" });
};

const OpenChannelSuccess = (state, action) => {
  return mergeObjects(state, { isOpen: true, channel_id: action.channel_id });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CHANNEL_REQUEST:
      return OpenChannelStart(state, action);
    case actionTypes.CHANGE_CHANNEL_SUCCESS:
      return OpenChannelSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
