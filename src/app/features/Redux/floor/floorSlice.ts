import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  Rooms, RoomState} from "../../types";

export interface UpdateRoomState {
  state: RoomState;
  roomId: number;
}

export const fetchAsyncUpdate = createAsyncThunk(
    "floor/put",
    async ({ state, roomId }: UpdateRoomState, thunkAPI) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/room/edit/room-state/${roomId}`, {
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
  
  
  



export interface FloorInitialState {
  floorData: Rooms[];
  floorNumber: string;
}


const initialState: FloorInitialState= {
  floorData:[],
  floorNumber: "2"
};

const floorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    setFloor: (state, action: PayloadAction<Rooms[]>) => {
      state.floorData = action.payload;
    },
    changeFloor: (state,action)=>{
      state.floorNumber = action.payload;
    },
  },
});

export default floorSlice.reducer;
export const {setFloor,changeFloor} = floorSlice.actions
