import Axios from './config';
import { isAxiosError } from 'axios';

export const getRanking = async () => {
  try {
    const response = await Axios.get('/members/rank');

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
  }
};
