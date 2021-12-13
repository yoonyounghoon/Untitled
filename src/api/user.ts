import axios, { AxiosResponse } from 'axios';
import { JoinForm } from '../components/auth/Join/useJoin';
import { loginState } from '../modules/auth/reducer';
import { client } from './axios';
interface Flag {
  code: string;
  data: {
    duplicateFlag: boolean;
  };
}

interface sendEmailResponse {
  data: {
    certificationCode: string;
    expirationDateTime: string;
  };
}

interface checkCodeResponse {
  data: {
    token: string;
    expirationDateTime: string;
  };
}

export const loginAPI = async (id: string, password: string) => {
  const response: AxiosResponse<loginState> = await client.post('/login', {
    userid: id,
    password,
  });
  return response;
};

export const checkIdAPI = async (id: string) => {
  const response: AxiosResponse<Flag> = await client.post('/overlap/userid', {
    userid: id,
  });
  return response.data;
};

export const checkEmailAPI = async (email: string) => {
  const response: AxiosResponse<Flag> = await client.post('overlap/email', {
    email,
  });
  return response.data;
};

export const checkNicknameAPI = async (nickname: string) => {
  const response: AxiosResponse<Flag> = await client.post('/overlap/username', {
    username: nickname,
  });
  return response.data;
};

export const sendEmailAPI = async (email: string, token: string) => {
  const response: AxiosResponse<sendEmailResponse> = await client.post(
    '/verification/email',
    {
      email,
      token,
    },
  );
  return response.data.data;
};

export const checkCodeAPI = async (code: string, token: string) => {
  const response: AxiosResponse<checkCodeResponse> = await client.post(
    '/verification/code',
    {
      certificationCode: code,
      token,
    },
  );
  return response.data.data;
};

export const joinAPI = async (form: JoinForm) => {
  const response = await client.post('/join', {
    email: form.email,
    userid: form.id,
    username: form.nickname,
    password: form.password,
    phoneNumber: form.phone,
    postcode: '1234',
    address: form.address,
    detailAddress: form.detailAddress,
    token: sessionStorage.getItem('signupToken'),
  });
  return response;
};
