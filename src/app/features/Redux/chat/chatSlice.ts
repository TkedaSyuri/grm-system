import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Chats, Tasks } from "../../types";






export const fetchAsyncPostMessage = createAsyncThunk(
    "chat/post",
    async (message:string) => {
      try {
        const res= await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/chats/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({message: message})
        });
        return res.json();
      } catch (err) {
        console.log(err);
      }
    }
  );



  
interface InitialChatState {
    chatData: Chats[]
}

const initialState:InitialChatState = {
    chatData:[],
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
      setChat: (state,action) => {
        state.chatData = action.payload;
      },
    },
  });
  
  export const {  setChat } = chatSlice.actions;
  export default chatSlice.reducer;
   