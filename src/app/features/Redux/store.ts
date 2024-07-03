import { configureStore } from "@reduxjs/toolkit";
import FloorReducer from "./FloorTable/FloorSlice";
import ModalReducer from "./Modal/ModalSlice";

export const store = configureStore({
  reducer: {
    FloorReducer,
    ModalReducer,
  },
});

