import * as actionTypes from "./actonTypes";
import axios from "axios";

//user actionType creator
const fetchUserStart = () => ({
  type: actionTypes.FETCH_USER_DATA_REQUEST
});

const fetchUserSuccess = userData => ({
  type: actionTypes.FETCH_USER_DATA_SUCCESS,
  userData
});

const fetchUserFail = error => ({
  type: actionTypes.FETCH_USER_DATA_FAIL,
  error: error
});

//fetching user action creator
export const fetchUserData = () => async dispatch => {
  try {
    dispatch(fetchUserStart());
    const response = await axios.get("http://localhost:9090/user");
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFail(error.message));
  }
};
