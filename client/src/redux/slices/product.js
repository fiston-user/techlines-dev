import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  pagination: null,
  favouritesToggled: true,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.products = payload;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    setPagination: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.pagination = payload;
    },
  },
});

export const { setLoading, setProducts, setError, setPagination } =
  productsSlice.actions;

export default productsSlice.reducer;

export const productSelector = (state) => state.products;
