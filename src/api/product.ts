import { RegisterUploadData } from '../types';
import { auth } from './axios';

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
