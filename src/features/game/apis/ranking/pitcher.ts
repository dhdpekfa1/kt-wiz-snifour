import axios from 'axios';
import { API_URL } from '@/constants/api-url';
import { OverallPitcherRank } from '@/features/common/types/pitchers';

export const getPitcherEraRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/pitcher/era/top3`
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

export const getPitcherWinRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/pitcher/win/top3`
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

export const getKTPitcherRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/kt/pitcher?gyear=2024&pname=&sortKey=ERA`
    ); // 모든 kt 투수 데이터 페칭

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    // 기존 데이터에 teamName이 없어서 추가(동적 렌더링을 위해 필요함)
    return (
      data.data.list.map((player: OverallPitcherRank) => ({
        ...player,
        teamName: 'KT',
      })) || []
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getAllPitcherRanking = async () => {
  try {
    const { data, status } = await axios.get(
      `${API_URL}/game/rank/total/pitcher?gyear=2024&pname=&sortKey=ERA`
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
