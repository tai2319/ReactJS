// src/sagas/postSaga.js

import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS,
  fetchPostsSuccess,
  ADD_POST,
  addPostSuccess,
  UPDATE_POST,
  updatePostSuccess,
} from "../actions/postActions";

function* fetchPostsSaga() {
  const response = yield axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put(fetchPostsSuccess(response.data));
}

function* addPostSaga(action) {
  const response = yield axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    action.payload
  );
  yield put(addPostSuccess(response.data));
}

function* updatePostSaga(action) {
  const response = yield axios.put(
    `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`,
    action.payload
  );
  yield put(updatePostSuccess(response.data));
}

function* watchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPostsSaga);
  yield takeEvery(ADD_POST, addPostSaga);
  yield takeEvery(UPDATE_POST, updatePostSaga);
}

export default function* rootSaga() {
  yield all([watchPosts()]);
}
