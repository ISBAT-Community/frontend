import { combineReducers } from "redux";
import postReducer from "../reducers/postReducer";
import channelReducer from "../reducers/channelReducer";

export const rootReducer = combineReducers({
  post: postReducer,
  channel: channelReducer
});
