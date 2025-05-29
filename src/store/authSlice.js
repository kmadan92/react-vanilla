import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.userData = action.payload;
    },
    logout: (state, action) => {
      state.isUserLoggedIn = false;
      state.userData = null;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
