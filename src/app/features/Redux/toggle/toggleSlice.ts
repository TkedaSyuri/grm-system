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
          body: JSON.stringify({ isConsecRoom: true}),
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
  isModalOpen: boolean;
  isBarOpen: boolean;
  isCompletedTaskOpen: boolean;
  roomNumber: string;
  roomId: number;
}

const initialState: InitialToggleState = {
  isModalOpen: false,
  isBarOpen: false,
  isCompletedTaskOpen: false,
  roomNumber: "",
  roomId: 0,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ roomNumber: string; roomId: number }>
    ) => {
      state.isModalOpen = !state.isModalOpen;
      state.roomNumber = action.payload.roomNumber;
      state.roomId = action.payload.roomId;
    },
    closeModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
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
  openModal,
  closeModal,
  openTaskBar,
  openChatBar,
  toggleCompletedTask,
} = toggleSlice.actions;
export default toggleSlice.reducer;
