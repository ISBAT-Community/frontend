import * as actionTypes from "./actonTypes";
import axios from "axios";

//fetch all posts actionType creator
const fetchPostStart = () => ({
  type: actionTypes.FETCH_POST_DATA_REQUEST
});

const fetchPostSuccess = postList => ({
  type: actionTypes.FETCH_POST_DATA_SUCCESS,
  postList
});

const fetchPostFail = error => ({
  type: actionTypes.FETCH_POST_DATA_FAIL,
  error
});

//fetch all posts action creator
export const fetchPosts = () => async dispatch => {
  try {
    dispatch(fetchPostStart());
    const response = await axios.get("http://localhost:9090/posts");
    dispatch(fetchPostSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostFail(error.message));
  }
};

//fetch single actionTypes creator
const fetchSinglePostStart = () => ({
  type: actionTypes.FETCH_SINGLE_POST_REQUEST
});

const fetchSinglePostSuccess = singlePost => ({
  type: actionTypes.FETCH_SINGLE_POST_SUCCESS,
  singlePost
});

const fetchSinglePostFail = error => ({
  type: actionTypes.FETCH_SINGLE_POST_FAIL,
  error
});

export const fetchSinglePostData = id => async dispatch => {
  dispatch(fetchSinglePostStart());
  axios
    .get(`http://localhost:9090/post/${id}`)
    .then(res => dispatch(fetchSinglePostSuccess(res.data)))
    .catch(error => {
      dispatch(fetchSinglePostFail(error.message));
    });
};
