import axios from 'axios';
import { AUTH_URL } from '../lib/constants';
import { RegisterUploadData } from '../types';

const auth = axios.create({
  baseURL: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AddProductApi = async ({
  images,
  productName,
  category,
  price,
  shipFee,
  shipStart,
  tags,
  content,
}: RegisterUploadData) => {
  const response = await auth.post('/products', {
    images,
    productName,
    category,
    price,
    shipFee,
    shipStart,
    tags,
    content,
  });
  return response;
};
