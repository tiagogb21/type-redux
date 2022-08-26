import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import scheduleLogin from "../reducers/loginReducer";

export const store = configureStore({
  reducer: {
    login: scheduleLogin,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
