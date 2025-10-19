import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Rooms } from "../../types";

export interface SalesInitialState {
  floorData: Rooms[];
}

  const initialState:SalesInitialState = {
    floorData: []
  }

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
  },
});


export default salesSlice.reducer;
