import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkEmailExists } from '../actions/authAction';
/* eslint-disable @typescript-eslint/no-explicit-any */

// Define the Auth state type
interface AuthState {
  isAuthenticated: boolean;
  user: any | null; // You can specify the user type if you have one (e.g., User type)
  emailExists: boolean | null;
  loading: boolean;
  error: string | null;
  token: string | null;
} 

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  emailExists: null,
  loading: false,
  error: null,
  token: ""
};

// Create a slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<any>) { // You can specify the action type (e.g., User)
      const { user } = action.payload;
      state.user = user;
      state.token = user.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    getUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(checkEmailExists.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(checkEmailExists.fulfilled, (state, action) => {
            state.loading = false;
            state.emailExists = action.payload.exists;
        })
        .addCase(checkEmailExists.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
},
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;