import { createSlice, PayloadAction,createAsyncThunk} from "@reduxjs/toolkit";
import { FloorData, room} from "../../Types";

const initialState: FloorData= {
  floorData:[]
};

const FloorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    setFloor: (state, action: PayloadAction<room[]>) => {
      state.floorData = action.payload;
    },
    changeState: (state, action: PayloadAction<{ id: number; ChangRoomState: string }>) => {
      const { id, ChangRoomState } = action.payload;
      
      const roomToUpdate = state.floorData.find(room => room.id === id);
      if (roomToUpdate) {
        roomToUpdate.roomState = ChangRoomState ;
      }
      
    }
  },
});

export default FloorSlice.reducer;
export const {setFloor,changeState} = FloorSlice.actions
