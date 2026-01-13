import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialToggleState {
  isRoomModalOpen: boolean;
  isTaskModalOpen: boolean;
  isBarOpen: boolean;
  isCompletedTaskOpen: boolean;
  isSalesOpen: boolean;
  roomNumber: string;
  roomId: number;
}

const initialState: InitialToggleState = {
  isRoomModalOpen: false,
  isTaskModalOpen: false,
  isBarOpen: false,
  isCompletedTaskOpen: false,
  isSalesOpen: false,
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
    openTaskModal: (state) => {
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
    openSales: (state) => {
      state.isSalesOpen = true;
    },
    closeSales: (state) => {
      state.isSalesOpen = false;
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
  openSales,
  closeSales
} = toggleSlice.actions;
export default toggleSlice.reducer;
