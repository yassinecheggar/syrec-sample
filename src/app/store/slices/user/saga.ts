import { User } from "@/types/user";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from "./slice";
import { getdetails } from "@/services/apis/auth";
import { AxiosResponse } from "axios";

function* fetchUserSaga(action: PayloadAction<string>) {
  try {
    const response: AxiosResponse<User> = yield call(() =>
      getdetails(action.payload)
    );
    const user: User = response.data;
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(
      fetchUserFailure(
        error instanceof Error ? error.message : "Failed to fetch user"
      )
    );
  }
}

export function* userSagas() {
  yield all([takeLatest(fetchUserRequest.type, fetchUserSaga)]);
}
