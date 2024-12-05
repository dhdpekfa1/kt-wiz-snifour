import Breadcrumb from '../common/Breadcrumb';
import MatchBoard from './components/MatchBoard';
import { MatchSummaryTable } from './components/table';

const mockData = {
  teamA: {
    wins: 72,
    losses: 70,
    draws: 2,
    winRate: 0.507,
    seasonResult: '시즌 성적',
    seasonRank: 5,
  },
  teamB: {
    wins: 76,
    losses: 66,
    draws: 2,
    winRate: 0.535,
    seasonResult: '시즌 성적',
    seasonRank: 3,
  },
};

const WatchPointTab = () => {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="w-full flex flex-col justify-center items-center">
        {/* 경로 */}
        <Breadcrumb
          paths={[
            { key: 'home', label: 'Home' },
            { key: 'game', label: 'Game' },
            { key: 'regular-season', label: '정규리그' },
            { key: 'box-score', label: '관전 포인트', isActive: true },
          ]}
        />

        {/* 경기 정보 보드 */}
        <MatchBoard
          team1Data={{
            teamName: 'KT',
            logoUrl: '/assets/emblems/ktwiz.svg',
            result: 1,
            stadium: '원정',
            tabType: 'MatchBoard',
          }}
          team2Data={{
            teamName: 'LG',
            logoUrl: '/assets/emblems/lgtwins.svg',
            result: 4,
            stadium: '홈',
            tabType: 'MatchBoard',
          }}
          matchDate="2024-12-10"
          matchTime="18:30"
          stadium="수원 KT 위즈 파크"
          gameTable={
            <MatchSummaryTable teamA={mockData.teamA} teamB={mockData.teamB} />
          }
        />
      </div>
    </div>
  );
};

export { WatchPointTab };
