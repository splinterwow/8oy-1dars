// redux/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mood: localStorage.getItem("theme") || "light", 
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mood = state.mood === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mood);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
