import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI } from '../../api/auth';

type loginProps = {
  id: string;
  password: string;
};

export type loginState = {
  token: string;
  isSuccess: boolean;
  user: {
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
  user: {
    userid: '',
    username: '',
    email: '',
    imageUrl: '',
    phoneNumber: '',
    certificationStatus: '',
    role: '',
    address: {
      address: '',
      detailAddress: '',
    },
  },
};

export const login = createAsyncThunk(
  'login',
  async ({ id, password }: loginProps) => {
    const response = await loginAPI(id, password);
    sessionStorage.setItem('token', response.headers['access-token']);
    return response.data;
  },
);

const loginSlice = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state, action) => {
      console.log('로그인 요청 시작');
    },
    [login.fulfilled.type]: (state, action) => {
      console.log('성공');
      state.isSuccess = true;
      state.user = action.payload.data;
    },
    [login.rejected.type]: (state, action) => {
      console.log('rejected');
      console.log(action.error);
      alert('로그인에 실패하였습니다. 다시 시도해 주세요');
    },
  },
});

export default loginSlice.reducer;
