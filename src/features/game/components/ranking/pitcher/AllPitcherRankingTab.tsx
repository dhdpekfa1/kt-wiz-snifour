import axios from 'axios';
import { useEffect, useState } from 'react';

import { API_URL } from '@/constants/api-url';
import { pitcherColumns } from '@/constants/player-rank-colums';
import { OverallPitcherRank } from '@/features/common/types/pitchers';
import {
  PlayerRankingTable,
  PlayerScatterChart,
} from '@/features/game/components/ranking';

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
