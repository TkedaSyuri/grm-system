import { createAsyncThunk } from "@reduxjs/toolkit";





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

export const fetchAsyncDeleteMessage = createAsyncThunk(
    "chat/delete",
    async (id:number) => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/chats/chat/${id}`, {
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
        await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/chats/chats`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.log(err);
      }
    }
  );


