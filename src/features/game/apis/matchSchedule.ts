import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// 월 스케줄
export const getMonthSchedule = async (yearMonth: string) => {
  try {
    const res = await axios.get(`${API_URL}/game/monthschedule`, {
      params: { yearMonth },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data.list;
  } catch (err) {
    console.error('getMonthSchedule error:', err);
    throw err;
  }
};

// 월 전체 스케줄
export const getAllMonthSchedule = async (yearMonth: string) => {
  try {
    const res = await axios.get(`${API_URL}/game/allgameschedule`, {
      params: { yearMonth },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data.list;
  } catch (err) {
    console.error('getAllMonthSchedule error:', err);
    throw err;
  }
};
