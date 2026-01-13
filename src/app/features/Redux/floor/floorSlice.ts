import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rooms } from "../../types";

export interface FloorInitialState {
  floorData: Rooms[];
  floorNumber: string;
  allRoomsData: Rooms[];
}

const initialState: FloorInitialState = {
  floorData: [],
  allRoomsData: [],
  floorNumber: "2",
};

const floorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    setFloor: (state, action: PayloadAction<Rooms[]>) => {
      state.floorData = action.payload;
    },
    setAllRooms: (state, action: PayloadAction<Rooms[]>) => {
      state.allRoomsData = action.payload;
    },
    changeFloor: (state, action: PayloadAction<string>) => {
      state.floorNumber = action.payload;
    },
  },
});

export default floorSlice.reducer;
export const { setFloor, setAllRooms,changeFloor, } = floorSlice.actions;
