import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//combineReducer
import { rootReducer } from "./reducers/reducer";

//Using Chrome Redux DevTool Extension or Compose from the Redux library
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
