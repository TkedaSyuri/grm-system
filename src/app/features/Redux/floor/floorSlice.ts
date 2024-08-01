import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { FloorData, room} from "../../Types";

const initialState: FloorData= {
  floorData:[],
  floorNumber: "2"
};

const floorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    setFloor: (state, action: PayloadAction<room[]>) => {
      state.floorData = action.payload;
    },
    changeFloor: (state,action)=>{
      state.floorNumber = action.payload;
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

export default floorSlice.reducer;
export const {setFloor,changeFloor,changeState} = floorSlice.actions
