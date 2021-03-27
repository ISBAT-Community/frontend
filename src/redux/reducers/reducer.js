import { combineReducers } from "redux";
import postReducer from "../reducers/postReducer";
import channelReducer from "../reducers/channelReducer";
import friendReducer from "../reducers/friendReducer";
import userReducer from "../reducers/userReducer";
import UI_Reducer from "../reducers/UI_Reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  friend: friendReducer,
  channel: channelReducer,
  UI: UI_Reducer
});
