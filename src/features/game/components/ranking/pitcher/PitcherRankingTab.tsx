import {
  AllPitcherRankingTab,
  KTPitcherRankingTab,
  RankingCard,
} from '@/features/game/components/ranking';
import { TabsList } from '@radix-ui/react-tabs';
import Breadcrumb from '../../../../common/Breadcrumb';
import SubTabsTrigger from '../../../../common/SubTabsTrigger';
// import { useTopPitcherRank } from '@/assets/hooks/ranking/useTopPitcherRank';
import { eraTop3, winTop3 } from '@/assets/data/__test__/mockRanking.json';
import { Tabs, TabsContent } from '@/components/ui';

function PitcherRankingTab() {
  // const { eraRanking, winRanking, loading, error } = useTopPitcherRank();

  // if (!eraRanking.length || !winRanking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }
  const eraRanking = eraTop3;
  const winRanking = winTop3;

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
      <div className="w-full mt-12 bg-wiz-white bg-opacity-10 grid grid-cols-2 rounded-xl px-8">
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
