import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getCoachList = async () => {
  try {
    const res = await axios.get(`${API_URL}/player/coachlist`);
    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data.list;
  } catch (err) {
    console.error('getCoachList error:', err);
    throw err;
  }
};

export const getCoach = async (pcode: string) => {
  try {
    const res = await axios.get(`${API_URL}/player/coachdetail`, {
      params: { pcode },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data.coachstep;
  } catch (err) {
    console.error('getCoach error:', err);
    throw err;
  }
};
