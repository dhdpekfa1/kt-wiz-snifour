import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  TeamBatterRankingTable,
  TeamPitcherRankingTable,
  TeamRankingTable,
  TeamVSTable,
} from '@/features/game/components/ranking';

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
          <TabsTrigger
            value="team"
            className="text-black text-base bg-white rounded"
          >
            팀 기록
          </TabsTrigger>
          <TabsTrigger
            value="team-pitcher"
            className="text-black text-base bg-white rounded"
          >
            투수 기록
          </TabsTrigger>
          <TabsTrigger
            value="team-batter"
            className="text-black text-base bg-white rounded"
          >
            타자 기록
          </TabsTrigger>
          <TabsTrigger
            value="team-match-record"
            className="text-black text-base bg-white rounded"
          >
            팀 상대 전적
          </TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="w-full">
          <TeamRankingTable />
        </TabsContent>
        <TabsContent value="team-pitcher" className="w-full">
          <TeamPitcherRankingTable />
        </TabsContent>
        <TabsContent value="team-batter" className="w-full">
          <TeamBatterRankingTable />
        </TabsContent>
        <TabsContent value="team-match-record" className="w-full">
          <TeamVSTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { TeamRankingTab };
