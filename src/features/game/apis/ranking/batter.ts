import axios from 'axios';
import { API_URL } from '@/constants/api-url';

export const getBatterHraRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/batter/hra/top3`
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

export const getBatterHrRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/batter/hr/top3`
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

export const getKTBatterRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/kt/batter?gyear=2024&pname=&sortKey=HRA`
    ); // 모든 kt 타자 데이터 페칭

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    return data.data.list || [];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getAllBatterRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/total/batter?gyear=2024&pname&sortKey=HRA`
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
