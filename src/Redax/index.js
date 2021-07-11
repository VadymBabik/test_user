import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./users/reducer";
import userEditReducer from "./editUser/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  editor: userEditReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
