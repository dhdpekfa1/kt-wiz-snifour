import axios from 'axios';
import { useEffect, useState } from 'react';

import { Tabs, TabsContent, TabsList } from '@/components/ui';
import { API_URL } from '@/constants/api-url';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';
import { BatterHR, BatterHra } from '@/features/common/types/batters';
import { RankingCard } from '../common/RankingCard';
import { AllBatterRankingTab } from './AllBatterRankingTab';
import { KTBatterRankingTab } from './KTBatterRankingTab';

function BatterRankingTab() {
  const [hraRanking, setHraRanking] = useState<BatterHra[]>([]);
  const [hrRanking, setHrRanking] = useState<BatterHR[]>([]);

  useEffect(() => {
    const getBatterHraRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/batter/hra/top3`
        );

        if (status === 200 && data) {
          setHraRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getBatterHrRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/batter/hr/top3`
        );

        if (status === 200 && data) {
          setHrRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getBatterHraRanking();
    getBatterHrRanking();
  }, []);

  if (!hraRanking.length || !hrRanking.length) {
    return null;
  }

  return (
    <div className="my-20">
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'game', label: 'Game' },
          { key: 'regular', label: '정규 리그' },
          { key: 'ranking', label: '순위 기록' },
          { key: 'batter', label: '타자 순위', isActive: true },
        ]}
      />

      {/* 타자 랭킹 카드 */}
      <div className="w-full mt-12 bg-wiz-white grid grid-cols-2 rounded-xl">
        <RankingCard
          title="타율 TOP 3"
          ranking={hraRanking}
          position="batter"
          indicator="hra"
        />
        <RankingCard
          title="홈런 TOP 3"
          ranking={hrRanking}
          position="batter"
          indicator="hr"
        />
      </div>

      {/* 타자 순위 표 */}
      <Tabs defaultValue="ktBatters">
        <TabsList className="my-8">
          <SubTabsTrigger value="ktBatters">KT Wiz 타자</SubTabsTrigger>
          <SubTabsTrigger value="allBatters">전체 타자 순위</SubTabsTrigger>
        </TabsList>
        <TabsContent value="ktBatters">
          <KTBatterRankingTab />
        </TabsContent>
        <TabsContent value="allBatters">
          <AllBatterRankingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { BatterRankingTab };
