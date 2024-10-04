import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./floor/floorSlice";
import modalReducer from "./modal/modalSlice";
import authReducer from "./auth/authSlice";
import taskReducer from "./task/taskSlice"

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    modal: modalReducer,
    staff:authReducer,
    task: taskReducer
  },
});

