import { Client } from './http';

export const AddProductApi = async (form: any) => {
  for (let key of form.keys()) {
    console.log(key, ':', form.get(key));
  }
  const response = await Client.post('/products', form, 'multipart/form-data');
  return response;
};
