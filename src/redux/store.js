import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import guitarsSlice from './slices/guitarsSlice';

export const store = configureStore({
  reducer: {
    filter:filterSlice,
    cart: cartSlice,
    guitar:guitarsSlice,
  },
});

