import { useEffect, useState } from 'react';
import axios from 'axios';

import { API_URL } from '@/constants/api-url';
import {
  PlayerRankingTable,
  PlayerScatterChart,
} from '@/features/game/components/ranking';
import { OverallBatterRank } from '@/features/common/types/batters';
import { batterColumns } from '@/constants/player-rank-colums';

function KTBatterRankingTab() {
  const [ranking, setRanking] = useState<OverallBatterRank[]>([]);

  useEffect(() => {
    const getKTBatterRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/kt/batter?gyear=2024&pname=&sortKey=HRA`
        ); // 모든 kt 타자 데이터 페칭

        if (status === 200 && data) {
          setRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getKTBatterRanking();
  }, []);

  return (
    <div>
      <PlayerScatterChart data={ranking} position="batter" />
      <PlayerRankingTable data={ranking} columns={batterColumns} kt />
    </div>
  );
}

export { KTBatterRankingTab };
