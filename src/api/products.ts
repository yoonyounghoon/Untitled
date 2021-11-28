import axios from 'axios';

export const getProductsAPI = async (kind: string) => {
  const res = await axios.get(
    `https://graduprojects.herokuapp.com/products/lists/${kind}`,
  );
  return res;
};
