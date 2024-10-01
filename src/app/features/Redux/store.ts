import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./Floor/FloorSlice";
import modalReducer from "./Modal/ModalSlice";
import authReducer from "./Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    modal: modalReducer,
    staff:authReducer,
  },
});

