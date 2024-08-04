import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "@/app/features/Redux/floor/floorSlice";
import modalReducer from "@/app/features/Redux/modal/modalSlice";

export const store = configureStore({
  reducer: {
    floor:floorReducer,
    modal: modalReducer,
  },
});

