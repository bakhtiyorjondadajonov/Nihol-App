import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import logoutModalSlice from "./logoutModalSlice";
import localeSlice from "./localeSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    logoutModal: logoutModalSlice,
    locale: localeSlice,
  },
});
