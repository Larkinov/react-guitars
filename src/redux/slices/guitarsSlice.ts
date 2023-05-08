import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type FetchGuitarsArgs = {
  sortBy: string;
  order:string;
  category:string;
  search:string;
  currentPage:string;
};

export const fetchGuitars = createAsyncThunk(
  "guitar/fetchGuitarsStatus",
  async (params: FetchGuitarsArgs) => {
    const { sortBy, order, category, search, currentPage } = params;
    const response = await axios.get<Guitar[]>(
      `https://6444d6e4914c816083c0a023.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    );
    return response.data;
  }
);

type Guitar = {
  id: string;
  name: string;
  cost: number;
  urlImage: string;
  gString: string[];
  gCase: string[];
};

interface GuitarSliceState {
  items: Guitar[];
  status: Status;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

const initialState: GuitarSliceState = {
  items: [],
  status: Status.LOADING,
};

const guitarSlice = createSlice({
  name: "guitar",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGuitars.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchGuitars.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchGuitars.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }
});

export const { setItems } = guitarSlice.actions;

export default guitarSlice.reducer;
