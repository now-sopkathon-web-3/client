import { isAxiosError } from 'axios';
import Axios from './config';

export const getTestApi = async () => {
  try {
    const response = await Axios.get('/health');

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
  }
};

export const loginApi = async (username: string) => {
  try {
    const response = await Axios.post('/members/auth', { username });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
  }
};
