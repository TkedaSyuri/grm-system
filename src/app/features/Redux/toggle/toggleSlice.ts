import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncToggleConsec = createAsyncThunk(
  "isConsec/toggle",
  async (roomId: number, thunkAPI) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/api/room/is-consecutive-nights/${roomId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isConsecRoom: true }),
        }
      );
      if (!res.ok) {
        return thunkAPI.rejectWithValue("データの変更に失敗しました。");
      }
    } catch (err) {
      console.log(err);
    }
  }
);

interface InitialToggleState {
  isRoomModalOpen: boolean;
  isTaskModalOpen: boolean;
  isBarOpen: boolean;
  isCompletedTaskOpen: boolean;
  roomNumber: string;
  roomId: number;
}

const initialState: InitialToggleState = {
  isRoomModalOpen: false,
  isTaskModalOpen: true,
  isBarOpen: false,
  isCompletedTaskOpen: false,
  roomNumber: "",
  roomId: 0,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {

    //部屋モーダルを表示する
    openRoomModal: (
      state,
      action: PayloadAction<{ roomNumber: string; roomId: number }>
    ) => {
      state.isRoomModalOpen = !state.isRoomModalOpen;
      state.roomNumber = action.payload.roomNumber;
      state.roomId = action.payload.roomId;
    },
    closeRoomModal: (state) => {
      state.isRoomModalOpen = !state.isRoomModalOpen;
    },
    
    //タスク作成モーダルを表示する
    openTaskModal: (
      state,
    ) => {
      state.isTaskModalOpen = !state.isTaskModalOpen;
    },
    closeTaskModal: (state) => {
      state.isTaskModalOpen = !state.isTaskModalOpen;
    },
    openTaskBar: (state) => {
      state.isBarOpen = false;
    },
    openChatBar: (state) => {
      state.isBarOpen = true;
    },
    toggleCompletedTask: (state) => {
      state.isCompletedTaskOpen = !state.isCompletedTaskOpen;
    },
  },
});

export const {
  openRoomModal,
  closeRoomModal,
  openTaskModal,
  closeTaskModal,
  openTaskBar,
  openChatBar,
  toggleCompletedTask,
} = toggleSlice.actions;
export default toggleSlice.reducer;
