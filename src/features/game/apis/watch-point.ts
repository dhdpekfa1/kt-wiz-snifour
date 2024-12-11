import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// 관전포인트
export const getWatchPoint = async (gameDate: string, gmkey: string) => {
  try {
    const res = await axios.get(`${API_URL}/game/watchpoint`, {
      params: { gameDate, gmkey },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data;
  } catch (err) {
    console.error('getWatchPoint error:', err);
    throw err;
  }
};
