import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getPlayerImage = async (team: string, name: string) => {
  try {
    const res = await axios.get(`${API_URL}/player_img`, {
      params: { team, name },
    });
    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }
    return res.data.url;
  } catch (err) {
    console.error('선수 증명사진 api GET 에러: ', err);
    throw err;
  }
};
