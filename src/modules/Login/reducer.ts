import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI } from '../../api/user';

type formState = {
  id: string;
  password: string;
};

type loginState = {
  token: string;
  isSuccess: boolean;
};

const initialState: loginState = {
  token: '',
  isSuccess: false,
};

export const login = createAsyncThunk(
  'login',
  async ({ id, password }: formState) => {
    try {
      const response = await loginAPI(id, password);
      sessionStorage.setItem('token', response.headers['access-token']);
      return response.headers['access-token'];
    } catch (e) {
      console.log(e);
      alert('로그인에 실패하였습니다. 다시 시도해 주세요');
    }
  },
);

const loginSlice = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {
    SetUser: (state, action) => {
      console.log('setUser');
      state.token = action.payload;
      state.isSuccess = true;
    },
  },
  extraReducers: {
    [login.pending.type]: (state, action) => {
      console.log('로그인 요청 시작');
    },
    [login.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.isSuccess = true;
    },
    [login.rejected.type]: (state, action) => {
      console.log('rejected');
    },
  },
});

export const { SetUser } = loginSlice.actions;

export default loginSlice.reducer;
