import { createSlice } from "@reduxjs/toolkit";
import { ThemeMode } from "./types";

const initState = {
  mode: ThemeMode.light,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    switchThemeMode: (state) => {
      state.mode =
        state.mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
    },
  },
});

export default themeSlice.reducer;
export const { switchThemeMode } = themeSlice.actions;


