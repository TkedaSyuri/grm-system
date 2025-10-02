import { createAsyncThunk } from "@reduxjs/toolkit";



interface ChatPayload {
  message:string;
  sender:string;
}

export const fetchAsyncPostMessage = createAsyncThunk(
    "chat/post",
    async ({message,sender}:ChatPayload) => {
      try {
        const res= await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/chats`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({message: message,sender:sender})
        });
        return res.json();
      } catch (err) {
        console.log(err);
      }
    }
  );

export const fetchAsyncDeleteMessage = createAsyncThunk(
    "chat/delete",
    async (id:number) => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/chats/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.log(err);
      }
    }
  );



  
export const fetchAsyncDeleteAllMessage = createAsyncThunk(
    "chat/all-delete",
    async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/chats`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.log(err);
      }
    }
  );


