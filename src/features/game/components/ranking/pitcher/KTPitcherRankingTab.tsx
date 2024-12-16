import axios from 'axios';
import { useEffect, useState } from 'react';

import { API_URL } from '@/constants/api-url';
import { pitcherColumns } from '@/constants/player-rank-colums';
import { OverallPitcherRank } from '@/features/common/types/pitchers';
import {
  PlayerRankingTable,
  PlayerScatterChart,
} from '@/features/game/components/ranking';

function KTPitcherRankingTab() {
  const [ranking, setRanking] = useState<OverallPitcherRank[]>([]);

  useEffect(() => {
    const getPitcherRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/kt/pitcher?gyear=2024&pname=&sortKey=ERA`
        ); // 모든 kt 투수 데이터 페칭

        if (status === 200 && data) {
          setRanking(
            data.data.list.map((player: OverallPitcherRank) => ({
              ...player,
              teamName: 'KT',
            })) || []
          ); // 기존 데이터에 teamName이 없어서 추가(동적 렌더링을 위해 필요함)
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPitcherRanking();
  }, []);

  return (
    <div>
      <PlayerScatterChart data={ranking} position="pitcher" />
      <PlayerRankingTable data={ranking} columns={pitcherColumns} kt />
    </div>
  );
}

export { KTPitcherRankingTab };
