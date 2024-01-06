import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Reducers/CardSlice";

const store = configureStore({
  reducer: {
    cardReducer: cardReducer,
  },
});

export default store;