import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./floor/floorSlice";
import modalReducer from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    modal: modalReducer,
  },
});

