//ruhen te dhenat e state
import { createStore } from "redux";
import baseReducer from "../reducers/index";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const initialState = {
  //register all users
  isLoogedIn: false,
};

export default function configureStore() {
  return createStore(baseReducer, initialState, composeEnhancers);
}
