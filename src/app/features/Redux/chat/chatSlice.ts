import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chats } from "../../types";

interface InitialChatState {
  chatData: Chats[];
}

const initialState: InitialChatState = {
  chatData: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<Chats[]>) => {
      state.chatData = action.payload;
    },
  },
});

export const { setChat } = chatSlice.actions;
export default chatSlice.reducer;
