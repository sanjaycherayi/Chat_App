import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GetSingleUserError,
  GetSingleUserSuccess,
  GetUserListError,
  GetUserListSuccess,
  actionType,
  
} from "./action";
import ChatService from "../../Service/ChatService";

function* GetAllUserList({ payload }) {
  try {
    const data = yield call(ChatService.GetAllUserList, payload);
    yield put(GetUserListSuccess(data));
  } catch (error) {
    yield put(GetUserListError(error));
    console.log(error);
  }
}

function* GetSingleUser({ payload }) {
  try {
    const data = yield call(ChatService.GetSingleUser, payload);
    yield put(GetSingleUserSuccess(data));
  } catch (error) {
    yield put(GetSingleUserError(error));
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionType.GET_USERLIST, GetAllUserList)]);
  yield all([takeEvery(actionType.GET_SINGLE_USER,GetSingleUser)]);
}

