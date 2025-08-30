import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAsyncFindToken,
  fetchAsyncLogin,
  fetchAsyncLogout,
} from "./authApi";

interface InitialStaffState {
  staff: null | {
    staffId: number;
    staffName: string;
  };
}

const initialState: InitialStaffState = {
  staff: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      console.log("ログイン成功", action.payload);
      state.staff = action.payload
    });
    builder.addCase(fetchAsyncLogin.rejected, (state, action) => {
      console.error("ログイン失敗", action.payload);
      alert(action.payload as string);
    });
    builder.addCase(
      fetchAsyncFindToken.fulfilled,
      (
        state,
        action: PayloadAction<{ staffId: number; staffName: string }>
      ) => {
        state.staff = action.payload;
      }
    );
  },
});

export default authSlice.reducer;
