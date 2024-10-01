import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RoomState } from "../../Main/Types";



export interface UpdateRoomState {
  state: RoomState;
  roomId: number;
}




export const fetchAsyncUpdate = createAsyncThunk(
  "room/put",
  async ({ state, roomId }: UpdateRoomState, thunkAPI) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/editRoomState/${roomId}`, {
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
      const currentIsConsecRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/isConsec/${roomId}`);
      if (!currentIsConsecRes .ok) {
        return thunkAPI.rejectWithValue("現在の状態の取得に失敗しました。");
      }
      const currentIsConsec = await currentIsConsecRes.json();
      const isConsec = currentIsConsec.is_ConsecRoom;

      const reversedIsConsec = !isConsec 

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/isConsec/${roomId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_ConsecRoom: reversedIsConsec }),
      });
      if (!response.ok) {
        return thunkAPI.rejectWithValue("真偽値の変更に失敗しました。");
      }
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
);

interface ModalInitialState {
  isOpen: boolean;
  roomNumber: string; 
  roomId: number;

}

const initialState: ModalInitialState = {
  isOpen: false,
  roomNumber: "",
  roomId: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ roomNumber: string; roomId: number }>
    ) => {
      state.isOpen = !state.isOpen;
      state.roomNumber = action.payload.roomNumber;
      state.roomId = action.payload.roomId;
    },
    closeModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
