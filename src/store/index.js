//ruhen te dhenat e state
import { createStore, compose, applyMiddleware } from "redux";
import baseReducer from "../reducers/index";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  isLoggedIn: false,
};

export default function configureStore() {
  return createStore(
    baseReducer,

    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
