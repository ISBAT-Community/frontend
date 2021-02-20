import * as actionTypes from "./actonTypes";
import axios from "axios";

//Channel actionType creator
const fetchFriendStart = () => ({
  type: actionTypes.FETCH_FRIENDS_DATA_REQUEST
});

const fetchFriendSuccess = friendList => ({
  type: actionTypes.FETCH_FRIENDS_DATA_SUCCESS,
  friendList
});

const fetchFriendFail = error => ({
  type: actionTypes.FETCH_FRIENDS_DATA_FAIL,
  error: error
});

//channel action creator
export const fetchFriends = () => async dispatch => {
  try {
    dispatch(fetchFriendStart());
    const response = await axios.get("http://localhost:9090/users");
    dispatch(fetchFriendSuccess(response.data));
  } catch (error) {
    dispatch(fetchFriendFail(error.message));
  }
};
