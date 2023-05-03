import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGuitars = createAsyncThunk(
  "guitar/fetchGuitarsStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const response = await axios.get(
      `https://6444d6e4914c816083c0a023.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    );

    return response.data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const guitarSlice = createSlice({
  name: "guitar",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchGuitars.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchGuitars.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchGuitars.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = guitarSlice.actions;

export default guitarSlice.reducer;
