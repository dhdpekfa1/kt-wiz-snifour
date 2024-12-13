import { useEffect, useState } from 'react';
import axios from 'axios';

import { CrowdRank } from '@/features/game/types/crowd-ranking';
import { API_URL } from '@/constants/api-url';
import Breadcrumb from '@/features/common/Breadcrumb';
import { CrowdRankingTable } from './CrowdRankingTable';
import { CrowdRankingChart } from './CrowdRankingChart';
import SubTitle from '@/features/common/SubTitle';

function CrowdRankingTab() {
  const [ranking, setRanking] = useState<CrowdRank[]>([]);

  useEffect(() => {
    const getCrowdRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/crowd?gyear=2024`
        );

        if (status === 200 && data) {
          setRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCrowdRanking();
  }, []);

  return (
    <div className="my-20">
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'game', label: 'Game' },
          { key: 'regular', label: '정규 리그' },
          { key: 'ranking', label: '순위 기록' },
          { key: 'crowd', label: '관중 현황', isActive: true },
        ]}
      />

      <SubTitle title="2024 시즌 관중 현황" className="my-8" />

      <div>
        <CrowdRankingChart data={ranking} />
        <CrowdRankingTable data={ranking} />
      </div>
    </div>
  );
}

export { CrowdRankingTab };
