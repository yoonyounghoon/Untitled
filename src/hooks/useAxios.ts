import axios from 'axios';

const useAxios = () => {

  const onAxios = async (path: string, data: any, name: string) => {
    try {
      await axios.post(`https://gradu-test.herokuapp.com/${path}`, data);
    } catch (error) {
      throw new Error(`unHandled axios error: ${error}`);
    }
  }

  return { onAxios };
}

export default useAxios;

