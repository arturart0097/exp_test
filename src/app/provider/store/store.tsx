import { configureStore } from "@reduxjs/toolkit";
import { productFilterReducer } from "../../../entities/ProductView/slice/slice";

export const store = configureStore({
  reducer: {
    productFilter: productFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
