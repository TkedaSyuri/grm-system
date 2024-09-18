import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./Floor/FloorSlice";
import modalReducer from "./Modal/ModalSlice";
import staffReducer from "./Staff/StaffSlice";

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    modal: modalReducer,
    staff:staffReducer,
  },
});

