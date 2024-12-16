import axios from 'axios';
import { useEffect, useState } from 'react';

import { TeamRank } from '../types';

function TeamRanking() {
  const [ranking, setRanking] = useState<TeamRank>({} as TeamRank);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const getKTRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/ktwizteamrank`
        );

        if (status === 200 && data) {
          setRanking(data.data.ktWizTeamRank);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getKTRanking();
  }, []);

  return (
    <div className="w-full h-[25%] flex items-end justify-between bg-wiz-red text-white pr-4 py-4">
      <div className="flex flex-col items-center justify-center relative">
        <img
          src="https://www.ktwiz.co.kr/v2/imgs/img-score@2x.png"
          alt=""
          className="w-24 translate-x-3 -translate-y-3"
        />
        <div className="absolute bottom-0 -right-2 bg-white text-wiz-red px-2 rounded-full font-extrabold">
          {ranking.rankName}
        </div>
      </div>
      <div className="flex flex-col items-end gap-4">
        <p className="text-2xl font-extrabold">{ranking.wldName}</p>
        <div className="flex items-center gap-2 text-xs font-bold">
          <p>총 {ranking.game}경기</p>
          <p>승률 {ranking.wra}</p>
        </div>
      </div>
    </div>
  );
}

export { TeamRanking };
