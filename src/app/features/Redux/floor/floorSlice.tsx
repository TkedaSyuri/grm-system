import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  Rooms} from "../../Main/Types";

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
