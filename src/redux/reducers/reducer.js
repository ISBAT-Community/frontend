import { combineReducers } from "redux";
import postReducer from "../reducers/postReducer";
import channelReducer from "../reducers/channelReducer";
import friendReducer from "../reducers/friendReducer";
import userReducer from "../reducers/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  friend: friendReducer,
  channel: channelReducer
});
