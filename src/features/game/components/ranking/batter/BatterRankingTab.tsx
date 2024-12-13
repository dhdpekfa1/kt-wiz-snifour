import { useTopBatterRank } from '@/assets/hooks/useTopBatterRank';
import Breadcrumb from '@/features/common/Breadcrumb';
import { RankingCard } from '../common/RankingCard';
import { Tabs, TabsContent, TabsList } from '@/components/ui';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';
import { KTBatterRankingTab } from './KTBatterRankingTab';
import { AllBatterRankingTab } from './AllBatterRankingTab';

function BatterRankingTab() {
  const { hraRanking, hrRanking, loading, error } = useTopBatterRank();

  if (!hraRanking.length || !hrRanking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
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
