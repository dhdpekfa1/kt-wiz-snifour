import { API_URL } from '@/constants/api-url';
import { TeamBatterRank } from '@/features/common/types/batters';
import { TeamPitcherRank } from '@/features/common/types/pitchers';
import axios from 'axios';

export const getTeamRanking = async () => {
  try {
    const { data, status } = await axios.get(`${API_URL}/game/teamrankbyyear`);

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    return data.data.list || [];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTeamPitchingRanking = async () => {
  try {
    const { data, status } = await axios.get(`${API_URL}/game/rank/pitching`);

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    const pitcherRanking = data.data.list || [];

    return pitcherRanking.sort(
      (a: TeamPitcherRank, b: TeamPitcherRank) => Number(a.era) - Number(b.era)
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTeamBattingRanking = async () => {
  try {
    const { data, status } = await axios.get(`${API_URL}/game/rank/batting`);

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    const pitcherRanking = data.data.list || [];

    return pitcherRanking.sort(
      (a: TeamBatterRank, b: TeamBatterRank) => Number(b.hra) - Number(a.hra)
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTeamVS = async () => {
  try {
    const { data, status } = await axios.get(`${API_URL}/game/rank/teamvs`);

    if (status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${status}`);
    }

    return data.data.list || [];
  } catch (err) {
    console.error(err);
    throw err;
  }
};
