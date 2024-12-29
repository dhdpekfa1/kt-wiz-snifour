import {
  AllPitcherRankingTab,
  KTPitcherRankingTab,
  RankingCard,
} from '@/features/game/components/ranking';
import Breadcrumb from '../../../../common/Breadcrumb';
import SubTabsTrigger from '../../../../common/SubTabsTrigger';
import { Tabs, TabsList, TabsContent } from '@/components/ui';
import { useTopPitcherRank } from '@/features/game/hooks/ranking/useTopPitcherRank';

function PitcherRankingTab() {
  const { eraRanking, winRanking, loading, error } = useTopPitcherRank();

  if (!eraRanking.length || !winRanking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-20">
      <Breadcrumb />

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
