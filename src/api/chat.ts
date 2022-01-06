import { auth } from './axios';

export const ChatJoinApi = async (id: number, sellerId: number) => {
  const response = await auth.post(
    'https://gradu-test.herokuapp.com/swagger-ui.html#/chat',

    {
      id,
      sellerId,
    },
  );
  return response;
};
