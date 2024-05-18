import Axios from './config';
import { isAxiosError } from 'axios';

export const getHistory = async () => {
  try {
    const response = await Axios.get('/histories');

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
  }
};
