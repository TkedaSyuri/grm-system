import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAsyncFindToken, fetchAsyncLogout } from "./authApi";



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
    builder.addCase(
      fetchAsyncFindToken.fulfilled,
      (
        state,
        action: PayloadAction<{ staffId: number; staffName: string }>
      ) => {
        state.staff = action.payload;
      }
    );
    builder.addCase(fetchAsyncLogout.fulfilled, (state, action) => {
      state.staff = action.payload;
    });
  },
});

export default authSlice.reducer;
