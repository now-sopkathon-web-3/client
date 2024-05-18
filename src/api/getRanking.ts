import { isAxiosError } from 'axios';
import Axios from './config';

export const getRanking = async (userId: any) => {
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
