import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  //can I just call it as a state not InitialState
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    userModalVisibility: false,
    addModalVisibility: false,
    addBookingModalVisibility: false,
  },
  reducers: {
    switchProfileModalVisibility(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchLocaleModalVisibility(state) {
      state.localeModalVisibility = !state.localeModalVisibility;
    },
    switchUserModalVisibility(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
    switchAddModalVisibility(state) {
      state.addModalVisibility = !state.addModalVisibility;
    },
    switchAddBookingModalVisibility(state) {
      state.addBookingModalVisibility = !state.addBookingModalVisibility;
    },
  },
});
export default modalSlice.reducer;
export const {
  switchProfileModalVisibility,
  switchLocaleModalVisibility,
  switchUserModalVisibility,
  switchAddModalVisibility,
  switchAddBookingModalVisibility,
} = modalSlice.actions;
