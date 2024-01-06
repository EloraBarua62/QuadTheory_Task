import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Reducers/CardSlice";

const store = configureStore({
  reducer: {
    cardReducer: cardReducer,
  },
  // middleware: getDefaultMiddleware => {
  //     return getDefaultMiddleware({
  //         serializableCheck: false
  //     })
  // },
  // devTools: true
});

export default store;