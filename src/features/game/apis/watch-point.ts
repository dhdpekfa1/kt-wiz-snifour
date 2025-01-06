import { API_URL } from '@/constants/api-url';
import axios from 'axios';

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

// 최근 경기
export const getRecentMatches = async () => {
  try {
    const res = await axios.get(`${API_URL}/game/recentGames`);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data.current;
  } catch (err) {
    console.error('getRecentMatches error:', err);
    throw err;
  }
};
