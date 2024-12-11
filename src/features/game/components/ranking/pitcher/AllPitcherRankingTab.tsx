import { useEffect, useState } from 'react';
import axios from 'axios';

import { OverallPitcherRank } from '@/features/common/types/Pitchers';
import { API_URL } from '@/constants/api-url';
import {
  PlayerRankingTable,
  PlayerScatterChart,
} from '@/features/game/components/ranking';
import { pitcherColumns } from '@/constants/player-rank-colums';

function AllPitcherRankingTab() {
  const [ranking, setRanking] = useState<OverallPitcherRank[]>([]);

  useEffect(() => {
    const getPitcherRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/total/pitcher?gyear=2024&pname=&sortKey=ERA`
        );

        if (status === 200 && data) {
          setRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPitcherRanking();
  }, []);

  return (
    <div className="flex flex-col">
      <PlayerScatterChart data={ranking} position="pitcher" />
      <PlayerRankingTable data={ranking} columns={pitcherColumns} />
    </div>
  );
}

export { AllPitcherRankingTab };
