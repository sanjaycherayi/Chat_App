import {all} from "redux-saga/effects"
import ChatSaga from "../ChatApi/saga"

export default function* rootSaga(){
    yield all([
        ChatSaga(),
    ])
}