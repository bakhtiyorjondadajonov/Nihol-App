import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import logoutModalSlice from "./logoutModalSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    logoutModal: logoutModalSlice,
  },
});
