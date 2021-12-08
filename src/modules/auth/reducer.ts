import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI } from '../../api/auth';
import { RootState } from '../store';

type loginProps = {
  id: string;
  password: string;
};

export type loginState = {
  token: string;
  isSuccess: boolean;
  user: null | {
    userid: string;
    username: string;
    email: string;
    imageUrl: string;
    phoneNumber: string;
    certificationStatus: string;
    role: string;
    address: {
      address: string;
      detailAddress: string;
    };
  };
};

const initialState: loginState = {
  token: '',
  isSuccess: false,
  user: null,
};

export const login = createAsyncThunk(
  'login',
  async ({ id, password }: loginProps) => {
    const response = await loginAPI(id, password);
    sessionStorage.setItem('accessToken', response.headers['access-token']);
    return response;
  },
);

export const logout = createAction('logout');

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state, action) => {
      console.log('로그인 요청 시작');
    },
    [login.fulfilled.type]: (state, action) => {
      console.log('성공');
      state.isSuccess = true;
      state.user = action.payload.data.data;
      state.token = action.payload.headers['access-token'];
    },
    [login.rejected.type]: (state, action) => {
      console.log(action.error);
      alert('로그인에 실패하였습니다. 다시 시도해 주세요');
    },
    logout: (state, action) => {
      state.token = '';
      state.isSuccess = false;
      state.user = null;
    },
  },
});

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
