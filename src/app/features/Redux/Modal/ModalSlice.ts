import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  roomNumber: string; 
}

const initialState: ModalState = {
  isOpen: false,
  roomNumber: "", 
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = !state.isOpen;
      state.roomNumber = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal} = ModalSlice.actions;
export default ModalSlice.reducer;