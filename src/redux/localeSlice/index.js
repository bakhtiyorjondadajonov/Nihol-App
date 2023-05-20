import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: "localeSlice",
  initialState: {
    lang: localStorage.getItem("locale") || "uzLotin",
  },
  reducers: {
    changeLanguage(state, { payload }) {
      state.lang = payload.lang;
    },
  },
});

export const { changeLanguage } = localeSlice.actions;
export default localeSlice.reducer;
