import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Rooms, Status } from "../../types";

export interface SalesInitialState {
  statusData: Status[];
}

  const initialState:SalesInitialState = {
    statusData: []
  }

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
  },
});


export default salesSlice.reducer;
