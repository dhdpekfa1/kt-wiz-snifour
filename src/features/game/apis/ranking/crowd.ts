import { API_URL } from '@/constants/api-url';
import axios from 'axios';

export const getCrowdRanking = async (season: string) => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/crowd?gyear=${season}`
    );

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    return data.data.list || [];
  } catch (err) {
    console.error(err);
    throw err;
  }
};
