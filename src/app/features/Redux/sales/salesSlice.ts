import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Rooms } from "../../types";

export interface SalesInitialState {
  allRoomsData: Rooms[];
}

  const initialState:SalesInitialState = {
    allRoomsData: []
  }

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
  },
});


export default salesSlice.reducer;
