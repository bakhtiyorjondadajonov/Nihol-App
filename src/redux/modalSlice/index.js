import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  //can I just call it as a state not InitialState
  initialState: {
    profileModalVisibility: false,
  },
  reducers: {
    switchProfileModalVisibility(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
  },
});
export default modalSlice.reducer;
export const { switchProfileModalVisibility } = modalSlice.actions;
