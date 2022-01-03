import { Client } from './http';
import { client } from './axios';
import { AxiosResponse } from 'axios';

export const AddProductApi = async (form: any) => {
  const response = await Client.post('/products', form, 'multipart/form-data');
  return response;
};

interface getProductResponse {
  data: {};
}

export const getProductDetailAPI = async (id: string) => {
  const response: AxiosResponse<getProductResponse> = await client.get(
    `/products/${id}`,
  );
  return response;
};

export const likeProduct = async (id: string) => {
  const response = await client.post(`/products/${id}/like`);
  return response;
};
