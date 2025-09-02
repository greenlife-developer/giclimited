import { createSlice } from "@reduxjs/toolkit";

let userName = localStorage.getItem("useName") || null;

const initialState = {
  isLoggedIn: false,
  userName: userName !== "undefined" ? JSON.parse(userName) : "",
  agent: JSON.parse(localStorage.getItem("agent")) || {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem("userName", JSON.stringify(action.payload));
      state.userName = action.payload;
    },
    SET_AGENT(state, action) {
      const profile = action.payload;
      localStorage.setItem("agent", JSON.stringify(profile));

      state.agent = profile;
    }
  },
}); 

export const { SET_LOGIN, SET_NAME, SET_AGENT } =
  authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.user.name;
export const selectAgent = (state) => state.auth.user;


export default authSlice.reducer;
