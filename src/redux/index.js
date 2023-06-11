import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import logoutModalSlice from "./logoutModalSlice";
import localeSlice from "./localeSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    logoutModal: logoutModalSlice,
    locale: localeSlice,
    userData: userSlice,
  },
});
