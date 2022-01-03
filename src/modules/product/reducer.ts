import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductDetailAPI } from '../../api/product';
import { RootState } from '../store';

type ProductState = {
  product: {
    id: string;
    categoryName: string;
    productDeliveryPrice: number;
    productDeliveryTerm: number;
    productInformation: string;
    productName: string;
    productPrice: number;
    productRating: number;
    seller: {
      sellerName: string;
      sellerInformation: string;
    };
  };
};

export const getProductData = createAsyncThunk(
  'product',
  async (productId: string) => {
    const res = await getProductDetailAPI(productId);
    return res;
  },
);

const initialState: ProductState = {
  product: null,
};

const productSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductData.fulfilled.type]: (state, action) => {
      console.log('성공');
      state.product = action.payload.data.data;
    },
    [getProductData.rejected.type]: (state, action) => {
      console.log(action.error);
      alert('실패');
    },
  },
});

export const productSelector = (state: RootState) => state.product;

export default productSlice.reducer;
