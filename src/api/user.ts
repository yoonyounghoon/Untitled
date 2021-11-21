import axios from 'axios';

export const loginAPI = async (id: string, password: string) => {
  const response = await axios.post(
    'https://gradu-test.herokuapp.com/login',
    {
      userid: id,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
