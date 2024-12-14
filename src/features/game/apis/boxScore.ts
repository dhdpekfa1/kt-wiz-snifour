import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getMatchData = async (gameDate: string, gmKey: string) => {
  try {
    const res = await axios.get(
      `${API_URL}/game/boxscore/${gameDate}/${gmKey}`
    );

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data.list;
  } catch (err) {
    console.error('박스스코어 api GET 에러: ', err);
    throw err;
  }
};
