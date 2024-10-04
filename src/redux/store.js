import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"; // themeSlice reducer
import usersReducer from "./usersSlice"; // usersSlice reducer

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    users: usersReducer,   
  },
});

export default store;
