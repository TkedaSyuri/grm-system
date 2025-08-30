import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Tasks } from "../../types";



interface InitialTaskState {
  taskData: Tasks[];
}

const initialState: InitialTaskState = {
  taskData: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Tasks[]>) => {
      state.taskData = action.payload;
    },
  },
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;
