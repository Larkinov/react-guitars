import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) findItem.count++;
      else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.cost * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem&&(findItem.count-1!==0)) {
        state.totalPrice -=findItem.cost;
        findItem.count--;
      }
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      state.totalPrice = state.totalPrice - (findItem.count * findItem.cost);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice=0;
    },
  },
});


export const selectorCart = (state) => state.cart;

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
