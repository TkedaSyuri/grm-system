import {createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAsyncToggleConsec = createAsyncThunk(
  "isConsec/toggle",
  async (roomId: number, thunkAPI) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/rooms/${roomId}/is-consecutive-nights`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isConsecRoom: true }),
        }
      );
      if (!res.ok) {
        return thunkAPI.rejectWithValue("データの変更に失敗しました。");
      }
    } catch (err) {
      console.log(err);
    }
  }
);
