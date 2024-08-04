import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./Floor/floorSlice";
import modalReducer from "./Modal/modalSlice";

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    modal: modalReducer,
  },
});

