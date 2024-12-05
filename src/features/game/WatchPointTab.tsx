import Breadcrumb from '../common/Breadcrumb';
import MatchBoard from './components/MatchBoard';
import { MatchScoreTable } from './components/table';

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
            { key: 'box-score', label: '박스 스코어', isActive: true },
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
          gameTable={<MatchScoreTable />}
        />
      </div>
    </div>
  );
};

export { WatchPointTab };
