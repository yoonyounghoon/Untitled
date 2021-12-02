import axios from 'axios';
import { AUTH_URL } from '../lib/constants';

const auth = axios.create({
  baseURL: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginAPI = async (id: string, password: string) => {
  const response = await auth.post('/login', {
    userid: id,
    password,
  });
  return response;
};

export const checkIdAPI = async (id: string) => {
  const response = await auth.post('/overlap/userid', {
    userid: id,
  });
  return response;
};

export const checkEmailAPI = async (email: string) => {
  const response = await auth.post('overlap/email', {
    email,
  });
  return response;
};

export const checkNicknameAPI = async (nickname: string) => {
  const response = await auth.post('/overlap/username', {
    username: nickname,
  });
  return response;
};

export const sendEmailAPI = async (email: string, token: string) => {
  const response = await auth.post('/verification/email', {
    email,
    token,
  });
  return response;
};

export const checkCodeAPI = async (code: string, token: string) => {
  const response = await auth.post('/verification/code', {
    certificationCode: code,
    token,
  });
  return response;
};

export const signUpAPI = async (id: string, password: string) => {
  const response = await auth.post('/singUp', {
    userid: id,
    password,
  });
  return response;
};
