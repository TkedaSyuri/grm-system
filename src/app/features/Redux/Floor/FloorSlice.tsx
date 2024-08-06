import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FloorData, Rooms, RoomState } from "../../Types";

const initialState: FloorData= {
  floorData:[],
  floorNumber: "2"
};

const floorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    //取得してきたデータをstoreにセット
    setFloor: (state, action: PayloadAction<Rooms[]>) => {
      state.floorData = action.payload;
    },
    //フロアを
    changeFloor: (state,action)=>{
      state.floorNumber = action.payload;
    },
  },
});

export default floorSlice.reducer;
export const {setFloor,changeFloor} = floorSlice.actions
