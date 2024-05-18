import Axios from './config';
import { isAxiosError } from 'axios';

export const getHistory = async (userId: number) => {
  try {
    const response = await Axios.get('/histories', {
      headers: {
        Authorization: userId,
      },
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
  }
};
