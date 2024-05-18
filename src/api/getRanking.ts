import Axios from './config';
import { isAxiosError } from 'axios';

export const getRanking = async () => {
  try {
    const response = await Axios.get('/todos/1');

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
  }
};
