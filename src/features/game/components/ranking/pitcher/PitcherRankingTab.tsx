import { useEffect, useState } from 'react';
import axios from 'axios';

import Breadcrumb from '../../../../common/Breadcrumb';
import { PitcherERA, PitcherWins } from '../../../../common/types/pitchers';
import { API_URL } from '@/constants/api-url';
import {
  AllPitcherRankingTab,
  KTPitcherRankingTab,
  RankingCard,
} from '@/features/game/components/ranking';
import { Tabs, TabsContent } from '@/components/ui';
import { TabsList } from '@radix-ui/react-tabs';
import SubTabsTrigger from '../../../../common/SubTabsTrigger';

function PitcherRankingTab() {
  const [eraRanking, setEraRanking] = useState<PitcherERA[]>([]);
  const [winRanking, setWinRanking] = useState<PitcherWins[]>([]);

  useEffect(() => {
    const getPitcherEraRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/pitcher/era/top3`
        );

        if (status === 200 && data) {
          setEraRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getPitcherWinRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/pitcher/win/top3`
        );

        if (status === 200 && data) {
          setWinRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPitcherEraRanking();
    getPitcherWinRanking();
  }, []);

  if (!eraRanking.length || !winRanking.length) {
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
          { key: 'pitcher', label: '투수 순위', isActive: true },
        ]}
      />

      {/* 투수 랭킹 카드 */}
      <div className="w-full mt-12 bg-wiz-white grid grid-cols-2 rounded-xl">
        <RankingCard
          title="평균 자책점 TOP 3"
          ranking={eraRanking}
          position="pitcher"
          indicator="era"
        />
        <RankingCard
          title="승리 TOP 3"
          ranking={winRanking}
          position="pitcher"
          indicator="w"
        />
      </div>

      {/* 투수 순위 표 */}
      <Tabs defaultValue="ktPitchers">
        <TabsList className="my-8">
          <SubTabsTrigger value="ktPitchers">KT Wiz 투수</SubTabsTrigger>
          <SubTabsTrigger value="allPitchers">전체 투수 순위</SubTabsTrigger>
        </TabsList>
        <TabsContent value="ktPitchers">
          <KTPitcherRankingTab />
        </TabsContent>
        <TabsContent value="allPitchers">
          <AllPitcherRankingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { PitcherRankingTab };
