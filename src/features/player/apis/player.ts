import { API_URL } from '@/constants/api-url';
import axios from 'axios';

export const getPlayerList = async (position: string) => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/player/${position}list`
    );
    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    return data || [];
  } catch (err) {
    console.error('getCoachList error:', err);
    throw err;
  }
};

export const getPlayer = async (position: string, pcode: string) => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/player/${position}detail`,
      {
        params: { pcode },
      }
    );

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    return data.data || null;
  } catch (err) {
    console.error('getCoach error:', err);
    throw err;
  }
};
