//ruhen te dhenat e state
import { createStore, compose, applyMiddleware } from "redux";
import baseReducer from "../reducers/index";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  isLoggedIn: [],
};

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (error) {
//     console.log(error);
//   }
// }

// store.subscribe(() => saveToLocalStorage(store.getState()));
export default function configureStore() {
  return createStore(
    baseReducer,

    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
