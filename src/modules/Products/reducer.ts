import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductsAPI } from '../../api/products';

export type productItem = {
  productName: string;
  productPrice: number;
  productRating: number;
};

type productsState = {
  popularProducts: productItem[];
  likeProducts: productItem[];
  recentProducts: productItem[];
};

const initialState: productsState = {
  popularProducts: [],
  likeProducts: [],
  recentProducts: [],
};

export const getRecentProducts = createAsyncThunk(
  'products/recentProducts',
  async () => {
    try {
      const response = await getProductsAPI('recent');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
);

export const getPopularProducts = createAsyncThunk(
  'products/popularProducts',
  async () => {
    try {
      const response = await getProductsAPI('like');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
);

export const getLikeProducts = createAsyncThunk(
  'products/likeProducts',
  async () => {
    try {
      const response = await getProductsAPI('mylike');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getRecentProducts.fulfilled.type]: (state, action) => {
      state.recentProducts = action.payload.data;
    },
    [getRecentProducts.rejected.type]: () => {
      console.log('rejected');
    },
    [getPopularProducts.fulfilled.type]: (state, action) => {
      state.popularProducts = action.payload;
    },
    [getPopularProducts.rejected.type]: () => {
      console.log('rejected');
    },
    [getLikeProducts.fulfilled.type]: (state, action) => {
      state.likeProducts = action.payload;
    },
    [getLikeProducts.rejected.type]: () => {
      console.log('rejected');
    },
  },
});

export default productsSlice.reducer;
