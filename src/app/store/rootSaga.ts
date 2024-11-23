import { all, fork } from "redux-saga/effects";
import { userSagas } from "./slices/user/saga";

export default function* rootSaga() {
  yield all([fork(userSagas)]);
}
