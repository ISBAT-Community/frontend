import * as actionTypes from "../actions/actonTypes";
import { mergeObjects } from "../utility";

const initialState = {
  postList: [],
  singlePost: [],
  loading: false
};

//fetching all postData
const fetchPostListStart = (state, action) => {
  return mergeObjects(state, { loading: true, postList: [] });
};

const fetchPostListSuccess = (state, action) => {
  return mergeObjects(state, {
    loading: false,
    postList: action.postList
  });
};

const fetchPostListFail = (state, action) => {
  return mergeObjects(state, { loading: true, error: action });
};

// fetching single postData
const fetchSinglePostStart = (state, action) => {
  return mergeObjects(state, { loading: true, singlePost: [] });
};

const fetchSinglePostSuccess = (state, action) => {
  return mergeObjects(state, {
    loading: false,
    singlePost: action.singlePost
  });
};

const fetchSinglePostFail = (state, action) => {
  return mergeObjects(state, { loading: true, error: action });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST_DATA_REQUEST:
      return fetchPostListStart(state, action);
    case actionTypes.FETCH_POST_DATA_SUCCESS:
      return fetchPostListSuccess(state, action);
    case actionTypes.FETCH_POST_DATA_FAIL:
      return fetchPostListFail(state, action);

    // fetching single Post data
    case actionTypes.FETCH_SINGLE_POST_REQUEST:
      return fetchSinglePostStart(state, action);
    case actionTypes.FETCH_SINGLE_POST_SUCCESS:
      return fetchSinglePostSuccess(state, action);
    case actionTypes.FETCH_SINGLE_POST_FAIL:
      return fetchSinglePostFail(state, action);

    default:
      return state;
  }
};

export default reducer;
