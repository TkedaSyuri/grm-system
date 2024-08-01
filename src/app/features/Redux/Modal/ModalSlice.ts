
import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import { ModalState } from "../../Types";

const apiUrl = "http://localhost:8080/editRoomState/"

interface UpdateRoomStatePayload {
  state: string;
  roomId: number;
}

export const fetchAsyncUpdate =createAsyncThunk("room/put",async ({ state, roomId }: UpdateRoomStatePayload,thunkAPI)=>{
  try {
    const response =  await fetch(`${apiUrl}${roomId}`,
       {
       method: "PUT",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ roomState: `${state}` }),
     });
     if (!response.ok) {
      return thunkAPI.rejectWithValue('Failed to update room state');
    }
     return response.json()
   } catch (err) {
     console.log(err);
   }

}) 

const initialState: ModalState = {
  isOpen: false,
  roomNumber: "", 
  roomId:0
};


const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{roomNumber: string,roomId: number}>) => {
      state.isOpen = !state.isOpen;
      state.roomNumber = action.payload.roomNumber;
      state.roomId = action.payload.roomId;
    },
    closeModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  }
});

export const { openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;