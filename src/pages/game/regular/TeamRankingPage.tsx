import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import { TeamRankingTable } from '@/features/game/components';

function TeamRankingPage() {
  return (
    <div className="my-20 text-white">
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'game', label: 'Game' },
          { key: 'regular', label: '정규 리그' },
          { key: 'ranking', label: '순위 기록', isActive: true },
        ]}
      />

      {/* sub navBar */}

      {/* 팀 순위 테이블 */}
      <SubTitle title="2024 시즌 팀 순위" />
      <Tabs defaultValue="team" className="w-full flex flex-col">
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
            팀별 투수
          </TabsTrigger>
          <TabsTrigger
            value="team-batter"
            className="text-black text-base bg-white rounded"
          >
            팀별 타자
          </TabsTrigger>
          <TabsTrigger
            value="team-match-record"
            className="text-black text-base bg-white rounded"
          >
            팀 간 승패표
          </TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="w-full">
          <TeamRankingTable />
        </TabsContent>
        <TabsContent value="team-pitcher" className="w-full">
          {null}
        </TabsContent>
        <TabsContent value="team-batter" className="w-full">
          {null}
        </TabsContent>
        <TabsContent value="team-match-record" className="w-full">
          {null}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TeamRankingPage;
