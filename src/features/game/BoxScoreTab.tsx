import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import MatchBoard from '@/features/game/components/MatchBoard';
import {
  BattingRecordTable,
  KeyRecordsTable,
  MatchScoreTable,
  PitchingRecordTable,
} from '@/features/game/components/table';
import { useEffect, useState } from 'react';
import { getMatchData } from './apis/boxScore';
import type { BoxScoreData } from './types/BoxScoreData';

interface Props {
  gameDate: string | undefined;
  gameKey: string | undefined;
}

const BoxScoreTab = ({ gameDate, gameKey }: Props) => {
  const [matchData, setMatchData] = useState<BoxScoreData>();

  useEffect(() => {
    fetchMatchData();
  }, []);

  /**TODO: 최신 경기 날짜 전달 - 오늘 기준으로 경기가 있는 날짜 확인*/
  const fetchMatchData = async () => {
    if (!gameDate && !gameKey) {
      const data = await getMatchData('20241011', '33331011KTLG0');
      setMatchData(data);
    }
    if (gameDate && gameKey) {
      const data = await getMatchData(gameDate, gameKey);
      setMatchData(data);
    }
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
            teamName: matchData?.schedule.current.visit,
            logoUrl: matchData?.schedule.current.visitLogo,
            result: matchData?.schedule.current.vscore,
            stadium: '원정',
            tabType: 'MatchBoard',
          }}
          team2Data={{
            teamName: matchData?.schedule.current.home,
            logoUrl: matchData?.schedule.current.homeLogo,
            result: matchData?.schedule.current.hscore,
            stadium: '홈',
            tabType: 'MatchBoard',
          }}
          matchDate={matchData?.schedule.current.gameDate.toString()}
          matchTime={matchData?.schedule.current.gtime}
          stadium={matchData?.schedule.current.stadium}
          gameTable={<MatchScoreTable data={matchData} />}
        />

        {/* 주요 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <SubTitle title="주요 기록" />
          <div className="w-full">
            <KeyRecordsTable data={matchData} />
          </div>
        </div>
        {/* team1 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${matchData?.schedule.current.visit} 타자 기록`}
            />
            <div className="w-full">
              <BattingRecordTable data={matchData?.vbatters} />
            </div>
          </div>
        </div>
        {/* team2 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle title={`${matchData?.schedule.current.home} 타자 기록`} />
            <div className="w-full">
              <BattingRecordTable data={matchData?.hbatters} />
            </div>
          </div>
        </div>
        {/* team1 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${matchData?.schedule.current.visit} 투수 기록`}
            />
            <div className="w-full">
              <PitchingRecordTable />
            </div>
          </div>
        </div>
        {/* team2 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle title={`${matchData?.schedule.current.home} 투수 기록`} />
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
