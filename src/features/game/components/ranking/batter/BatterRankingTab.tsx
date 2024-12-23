// import { useTopBatterRank } from '@/assets/hooks/ranking/useTopBatterRank';
import Breadcrumb from '@/features/common/Breadcrumb';
import { RankingCard } from '../common/RankingCard';
import { Tabs, TabsContent, TabsList } from '@/components/ui';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';
import { AllBatterRankingTab } from './AllBatterRankingTab';
import { hraTop3, hrTop3 } from '@/assets/data/__test__/mockRanking.json';
import { KTBatterRankingTab } from './KTBatterRankingTab';

function BatterRankingTab() {
  // const { hraRanking, hrRanking, loading, error } = useTopBatterRank();

  // if (!hraRanking.length || !hrRanking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const hraRanking = hraTop3;
  const hrRanking = hrTop3;

  return (
    <div className="my-20">
      <Breadcrumb />

      {/* 타자 랭킹 카드 */}
      <div className="w-full mt-12 bg-wiz-white bg-opacity-10 grid grid-cols-2 rounded-xl">
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
