import Breadcrumb from '@/features/common/Breadcrumb';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';
import { RankingCard } from '../common/RankingCard';
import { AllBatterRankingTab } from './AllBatterRankingTab';
import { KTBatterRankingTab } from './KTBatterRankingTab';
import { useTopBatterRank } from '@/features/game/hooks/ranking';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList } from '@/components/ui';

function BatterRankingTab() {
  const { hraRanking, hrRanking, loading, error } = useTopBatterRank();

  if (!hraRanking.length || !hrRanking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Breadcrumb />

      {/* 타자 랭킹 카드 */}
      <div
        className={cn(
          'w-full mt-12 bg-wiz-white bg-opacity-10 grid grid-cols-1 rounded-xl p-8 gap-4',
          'lg:grid-cols-2'
        )}
      >
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
