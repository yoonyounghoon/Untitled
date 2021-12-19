import { Client } from './http';

export const AddProductApi = async (form: any) => {
  const response = await Client.post('/products', form, 'multipart/form-data');
  return response;
};
