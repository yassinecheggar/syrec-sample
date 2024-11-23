import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/user/slice";
import { AnyAction } from "redux-saga";

const rootReducer = combineReducers({
  user: userReducer,
});

export const resetableRootReducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: AnyAction
) => {
  if (action.type === "auth/logout") {
    // Reset state to initial state
    state = undefined;
  }
  return rootReducer(state, action);
};
export default rootReducer;
