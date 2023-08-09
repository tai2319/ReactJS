import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import postReducer from "../Reducers/postReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  // ... Add other reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
