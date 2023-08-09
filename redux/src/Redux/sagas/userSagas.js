// src/redux/sagas/userSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  DELETE_USER,
  GET_USERS,
  getUsers,
  setUsers,
} from "../actions/userAction";

function* getUsersSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(setUsers(response.data));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function* deleteUserSaga(action) {
  const id = action.payload;
  try {
    yield call(
      axios.delete,
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    yield put(getUsers()); // Gọi action GET_USERS để cập nhật danh sách sau khi xóa
  } catch (error) {
    console.error("Error deleting user:", error);
    // Xử lý lỗi nếu cần
  }
}

export function* userSaga() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(DELETE_USER, deleteUserSaga); // Thêm saga xử lý DELETE_USER
}
