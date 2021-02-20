import * as actionTypes from "../actions/actonTypes";
import { mergeObjects } from "../utility";

const initialState = {
  userData: {},
  loading: false
};

//fetching all friends
const fetchUserStart = (state, action) => {
  return mergeObjects(state, { loading: true, userData: {} });
};

const fetchUserSuccess = (state, action) => {
  return mergeObjects(state, {
    loading: false,
    userData: action.userData
  });
};

const fetchUserFail = (state, action) => {
  return mergeObjects(state, { loading: true, error: action });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_DATA_REQUEST:
      return fetchUserStart(state, action);
    case actionTypes.FETCH_USER_DATA_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.FETCH_USER_DATA_FAIL:
      return fetchUserFail(state, action);
    default:
      return state;
  }
};

export default reducer;
