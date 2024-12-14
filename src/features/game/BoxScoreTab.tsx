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
import { useEffect, useState } from 'react';
import { getMatchData } from './apis/boxScore';
import type { BoxScoreData } from './types/BoxScoreData';

interface Props {
  gameDate: string;
  gameKey: string;
}

const BoxScoreTab = ({ gameDate, gameKey }: Props) => {
  const [matchData, setMatchData] = useState<BoxScoreData>();
  /*const [gmDate, setGmDate] = useState('20241011');
  const [gmKey, setGmKey] = useState('3331011KTLG0');*/

  useEffect(() => {
    fetchMatchData();
  }, []);

  /**TODO: gameDate, gameKey 매개변수 state 전달 */
  const fetchMatchData = async () => {
    const data = await getMatchData('20241011', '3331011KTLG0');
    setMatchData(data);
  };

  if (!matchData) {
    return (
      <div>
        `${gameDate} ${gameKey}`
      </div>
    );
  }

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
            teamName: matchData.schedule.current.home,
            logoUrl: matchData.schedule.current.homeLogo,
            result: matchData.schedule.current.hscore,
            stadium: matchData.schedule.current.stadium,
            tabType: 'MatchBoard',
          }}
          team2Data={{
            teamName: matchData.schedule.current.visit,
            logoUrl: matchData.schedule.current.visitLogo,
            result: matchData.schedule.current.vscore,
            stadium: matchData.schedule.current.stadium,
            tabType: 'MatchBoard',
          }}
          matchDate={matchData.schedule.current.gameDate}
          matchTime={matchData.schedule.current.gtime}
          stadium={matchData.schedule.current.stadium}
          gameTable={<MatchScoreTable />}
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
