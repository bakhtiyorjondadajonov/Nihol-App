import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    selectedUser: {},
    isRoomBooked: false,
    buildingMutation: {},
  },
  reducers: {
    getUserData(state, { payload }) {
      state.selectedUser = payload;
    },
    setIsRoomBooked(state, { payload }) {
      state.isRoomBooked = payload;
    },
    setBuildingMutation(state, { payload }) {
      state.buildingMutation = payload;
    },
  },
});
export const { getUserData, setIsRoomBooked, setBuildingMutation } =
  userSlice.actions;
export default userSlice.reducer;
