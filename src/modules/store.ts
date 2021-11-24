import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../modules/Login';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
