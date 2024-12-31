import { API_URL } from '@/constants/api-url';
import axios from 'axios';

export const getCheerleaderList = async () => {
  try {
    const res = await axios.get(`${API_URL}/player/cheerleader`);
    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }
    return res.data.data.list;
  } catch (err) {
    console.error('getCheerleaderList error:', err);
    throw err;
  }
};
