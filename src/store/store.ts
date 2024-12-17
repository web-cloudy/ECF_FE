import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './reducers/staffReducer';
import authReducer from './reducers/authReducer';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    staff: staffReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;