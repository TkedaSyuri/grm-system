import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./Floor/FloorSlice";
import modalReducer from "./Modal/ModalSlice";

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    modal: modalReducer,
  },
});

