import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    toggleCompletedTask: (state) =>{
      state.isCompletedTaskOpen = !state.isCompletedTaskOpen
    }
  },
});

export const { openModal, closeModal, openTaskBar,openChatBar,toggleCompletedTask} = toggleSlice.actions;
export default toggleSlice.reducer;
