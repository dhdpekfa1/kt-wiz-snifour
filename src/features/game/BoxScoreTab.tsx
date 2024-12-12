import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import MatchBoard from '@/features/game/components/MatchBoard';
import {
  BattingRecordTable,
  KeyRecordsTable,
  MatchScoreTable,
  PitchingRecordTable,
} from '@/features/game/components/table';
import { mockMatchData } from '@/features/game/components/table/MatchScoreTable';
import { useMatchStore } from '@/store/useMatchStore';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

const BoxScoreTab = () => {
  const { selectedDate, setSelectedDate } = useMatchStore();
  const { gameDate, gameKey } = useParams<{
    gameDate: string;
    gameKey: string;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(new Date('2024-10-11'));
    }
  }, [selectedDate, setSelectedDate]);

  const handleRouteChange = () => {
    navigate(`/game/regular/boxscore/${gameDate}/${gameKey}`); // Replace with your desired route
  };

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

        {/* 경기 스코어 테이블 */}
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
          onRouteChange={handleRouteChange}
        />

        {/* 주요 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <SubTitle title="주요 기록" />
          <div className="w-full">
            <KeyRecordsTable />
          </div>
        </div>
        {/* team1 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle title={`${mockMatchData[0].team1} 타자 기록`} />
            <div className="w-full">
              <BattingRecordTable />
            </div>
          </div>
        </div>
        {/* team2 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle title={`${mockMatchData[0].team2} 타자 기록`} />
            <div className="w-full">
              <BattingRecordTable />
            </div>
          </div>
        </div>
        {/* team1 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle title={`${mockMatchData[0].team1} 투수 기록`} />
            <div className="w-full">
              <PitchingRecordTable />
            </div>
          </div>
        </div>
        {/* team2 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle title={`${mockMatchData[0].team2} 투수 기록`} />
            <div className="w-full">
              <PitchingRecordTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BoxScoreTab };
