
import { createAsyncThunk,} from "@reduxjs/toolkit";
import { RoomState } from "../../types";

export interface UpdateRoomState {
  state: RoomState;
  roomId: number;
}


// 部屋の状態を更新するapi
export const fetchAsyncUpdate = createAsyncThunk(
    "floor/put",
    async ({ state, roomId }: UpdateRoomState, thunkAPI) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/rooms/${roomId}/state`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomState: `${state}` }),
        });
        if (!response.ok) {
          return thunkAPI.rejectWithValue("部屋のステータス変更に失敗しました。");
        }
        return response.json();
      } catch (err) {
        console.log(err);
      }
    }
  );

//連泊を更新するapi
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

  
  
  

