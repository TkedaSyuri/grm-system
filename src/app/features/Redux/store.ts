import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./floor/floorSlice";
import authReducer from "./auth/authSlice";
import taskReducer from "./task/taskSlice"
import toggleReducer from "./toggle/toggleSlice"

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    staff:authReducer,
    task: taskReducer,
    toggle: toggleReducer,
  },
});

