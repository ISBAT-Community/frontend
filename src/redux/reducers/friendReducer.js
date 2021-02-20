import * as actionTypes from "../actions/actonTypes";
import { mergeObjects } from "../utility";

const initialState = {
  friendList: [],
  loading: false
};

//fetching all friends
const fetchFriendListStart = (state, action) => {
  return mergeObjects(state, { loading: true, friendList: [] });
};

const fetchFriendListSuccess = (state, action) => {
  return mergeObjects(state, {
    loading: false,
    friendList: action.friendList
  });
};

const fetchFriendListFail = (state, action) => {
  return mergeObjects(state, { loading: true, error: action });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FRIENDS_DATA_REQUEST:
      return fetchFriendListStart(state, action);
    case actionTypes.FETCH_FRIENDS_DATA_SUCCESS:
      return fetchFriendListSuccess(state, action);
    case actionTypes.FETCH_FRIENDS_DATA_FAIL:
      return fetchFriendListFail(state, action);
    default:
      return state;
  }
};

export default reducer;
