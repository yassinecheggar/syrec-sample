import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { UpdateUserPayload, User } from "@/types/user";

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
  preferences: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserRequest: (state, action: PayloadAction<UpdateUserPayload>) => {
      state.loading = true;
      state.error = null;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserRequest,
} = userSlice.actions;

export default userSlice.reducer;
