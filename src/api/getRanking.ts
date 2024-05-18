import Axios from './config';
import { isAxiosError } from 'axios';

export const getRanking = async (userId: number) => {
  try {
    const response = await Axios.get('/members/rank', {
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
