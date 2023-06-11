import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    selectedUser: {},
    isRoomBooked: false,
  },
  reducers: {
    getUserData(state, { payload }) {
      state.selectedUser = payload;
    },
    setIsRoomBooked(state, { payload }) {
      state.isRoomBooked = payload;
    },
  },
});
export const { getUserData, setIsRoomBooked } = userSlice.actions;
export default userSlice.reducer;
