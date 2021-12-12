import axios from 'axios';
import { RegisterUploadData } from '../types';
import { auth } from './axios';

export const requestAddProduct = async (
  {
    images,
    productName,
    category,
    price,
    shipFee,
    shipStart,
    tags,
    content,
  }: RegisterUploadData,
  accessToken: string | null,
) => {
  await auth.post('/products', images);
};
