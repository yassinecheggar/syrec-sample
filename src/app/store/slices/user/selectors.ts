import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUserState = (state: RootState) => state.user;
export const selectUser = createSelector(
  selectUserState,
  (userState) => userState.data
);
export const selectUserLoading = createSelector(
  selectUserState,
  (userState) => userState.loading
);
