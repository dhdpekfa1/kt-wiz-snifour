import { Tabs, TabsContent, TabsList } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  TeamBatterRankingTable,
  TeamPitcherRankingTable,
  TeamRankingTable,
  TeamVSTable,
} from '@/features/game/components/ranking';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';

function TeamRankingTab() {
  return (
    <div className="my-20 text-white">
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'game', label: 'Game' },
          { key: 'regular', label: '정규 리그' },
          { key: 'ranking', label: '순위 기록' },
          { key: 'team', label: '팀 순위', isActive: true },
        ]}
      />

      {/* sub navBar */}

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
          <TeamPitcherRankingTable />
        </TabsContent>
        <TabsContent value="teamBatter" className="w-full">
          <TeamBatterRankingTable />
        </TabsContent>
        <TabsContent value="teamMatchRecords" className="w-full">
          <TeamVSTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { TeamRankingTab };
