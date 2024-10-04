import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Tasks } from "../../Main/Types";


export const fetchAsyncUpdate = createAsyncThunk(
    "room/put",
    async () => {
      try {
        const res= await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/tasks/allTasks`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        return res.json();
      } catch (err) {
        console.log(err);
      }
    }
  );
  
  
  

interface InitialTaskState {
    taskData: Tasks[]
}

const initialState:InitialTaskState = {
    taskData:[],
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
      setTask: (state,action:PayloadAction<Tasks[]>) => {
        state.taskData = action.payload;
      },
    },
  });
  
  export const {  setTask } = modalSlice.actions;
  export default modalSlice.reducer;
   