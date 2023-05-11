import { createSlice } from "@reduxjs/toolkit";

const logoutModalSlice = createSlice({
  name: "logoutSlice",
  initialState: {
    logoutModalVisibility: false,
  },
  reducers: {
    switchLogoutModalVisibility(state) {
      state.logoutModalVisibility = !state.logoutModalVisibility;
    },
  },
});
export default logoutModalSlice.reducer;

export const { switchLogoutModalVisibility } = logoutModalSlice.actions;
