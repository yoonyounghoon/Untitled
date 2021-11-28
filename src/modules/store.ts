import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../modules/Login';
import { productsReducer } from './Products';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
