import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../rtk/todoSlice";
import asyncReducer from "../rtk/asyncSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    async: asyncReducer,
  },
});
