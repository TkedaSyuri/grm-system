
import { createAsyncThunk,} from "@reduxjs/toolkit";
import { RoomState } from "../../types";

export interface UpdateRoomState {
  state: RoomState;
  roomId: number;
}



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
  
  
  

