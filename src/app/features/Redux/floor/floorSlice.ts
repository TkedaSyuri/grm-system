import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  Rooms, RoomState} from "../../types";

export interface UpdateRoomState {
  state: RoomState;
  roomId: number;
}

export const fetchAsyncUpdate = createAsyncThunk(
    "room/put",
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
  
  
  

export const fetchAsyncToggleConsec = createAsyncThunk(
    "isConsec/toggle",
    async (roomId: number, thunkAPI) => {
      try {
        const currentIsConsecRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/room/get/is-consecutive-nights/${roomId}`);
        if (!currentIsConsecRes.ok) {
          return thunkAPI.rejectWithValue("現在の状態の取得に失敗しました。");
        }
        const currentIsConsec = await currentIsConsecRes.json();
        
        const isConsec = currentIsConsec.is_ConsecRoom;
        
  
        const reversedIsConsec = !isConsec         
  
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/room/edit/is-consecutive-nights/${roomId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isConsecRoom: reversedIsConsec }),
        });
        if (!res.ok) {
          return thunkAPI.rejectWithValue("データの変更に失敗しました。");
        }
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
