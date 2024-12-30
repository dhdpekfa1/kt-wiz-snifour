import { Tabs, TabsContent, TabsList } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';
import SubTitle from '@/features/common/SubTitle';
import {
  TeamBatterRankingView,
  TeamPitcherRankingView,
  TeamRankingTable,
  TeamVSTable,
} from '@/features/game/components/ranking';

function TeamRankingTab() {
  return (
    <div className="text-white">
      <Breadcrumb />

      {/* 팀 순위 테이블 */}
      <SubTitle title="2024 시즌 팀 순위" />
      <Tabs defaultValue="team" className="w-full flex flex-col mt-4">
        <TabsList className="w-fit flex items-center gap-4 my-2">
          <SubTabsTrigger value="team">팀 기록</SubTabsTrigger>
          <SubTabsTrigger value="teamPitcher">투수 기록</SubTabsTrigger>
          <SubTabsTrigger value="teamBatter">타자 기록</SubTabsTrigger>
          <SubTabsTrigger value="teamMatchRecords">팀 상대 전적</SubTabsTrigger>
        </TabsList>
        <TabsContent value="team" className="w-full">
          <TeamRankingTable />
        </TabsContent>
        <TabsContent value="teamPitcher" className="w-full">
          <TeamPitcherRankingView />
        </TabsContent>
        <TabsContent value="teamBatter" className="w-full">
          <TeamBatterRankingView />
        </TabsContent>
        <TabsContent value="teamMatchRecords" className="w-full">
          <TeamVSTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { TeamRankingTab };
