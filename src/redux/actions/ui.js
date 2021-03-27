import * as actionTypes from "./actonTypes";

//Change channel actionType creator
const changeChannelStart = () => ({
  type: actionTypes.CHANGE_CHANNEL_REQUEST
});

const changeChannelSuccess = channel_id => ({
  type: actionTypes.CHANGE_CHANNEL_SUCCESS,
  channel_id
});

//channge channel action creator
export const changeChannel = id => async dispatch => {
  dispatch(changeChannelStart());
  dispatch(changeChannelSuccess(id));
};
