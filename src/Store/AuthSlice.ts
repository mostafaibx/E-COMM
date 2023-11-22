import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "../types";

const userDetails: userDetails = {
  uid: "",
  email: "",
  displayName: "",
  photoURL: "",
};
const initialState = {
  isLogin: false,
  currentUser: userDetails,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setIsLogin, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
