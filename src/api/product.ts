import axios from 'axios';
import { RegisterUploadData } from '../types';

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
  await axios.post('http://localhost8080', images, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
