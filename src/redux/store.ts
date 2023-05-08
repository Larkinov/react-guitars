import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import guitarsSlice from './slices/guitarsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter:filterSlice,
    cart: cartSlice,
    guitar:guitarsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();