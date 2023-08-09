import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import postReducer from "./reducers/postReducers";
import rootSaga from "./sagas/postSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(postReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
