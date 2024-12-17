import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  BattingRecordTable,
  KeyRecordsTable,
  MatchScoreTable,
  PitchingRecordTable,
} from '@/features/game/components/table';
import { MatchBoard } from './components/watch-point';

import { useEffect, useState } from 'react';
import { getMatchData } from './apis/boxScore';
import type { BoxScoreData } from './types/BoxScoreData';

import type { Batter } from './types/BoxScoreData';

export const mockBatters: Batter[] = [
  {
    ab: 4,
    accmAb: 20,
    accmHit: 8,
    changeinn: '4회',
    gday: '20240601',
    gmkey: 'KTSSG20240601',
    hit: 2,
    inn1: '안타',
    inn2: '',
    inn3: '삼진',
    inn4: '',
    inn5: '볼넷',
    inn6: '',
    inn7: '2루타',
    inn8: '',
    inn9: '',
    name: '박병호',
    oneturn: '1회',
    pcode: 'KT001',
    position: '1루수',
    rbi: 1,
    run: 1,
    tb: '2',
    turn: '1',
  },
  {
    ab: 3,
    accmAb: 18,
    accmHit: 6,
    changeinn: '3회',
    gday: '20240601',
    gmkey: 'KTSSG20240601',
    hit: 1,
    inn1: '볼넷',
    inn2: '아웃',
    inn3: '',
    inn4: '안타',
    inn5: '',
    inn6: '아웃',
    inn7: '',
    inn8: '',
    inn9: '',
    name: '최정',
    oneturn: '2회',
    pcode: 'SSG001',
    position: '3루수',
    rbi: 0,
    run: 0,
    tb: '1',
    turn: '2',
  },
  {
    ab: 4,
    accmAb: 25,
    accmHit: 10,
    changeinn: '6회',
    gday: '20240601',
    gmkey: 'KTSSG20240601',
    hit: 3,
    inn1: '홈런',
    inn2: '',
    inn3: '삼진',
    inn4: '안타',
    inn5: '',
    inn6: '',
    inn7: '2루타',
    inn8: '',
    inn9: '',
    name: '이정후',
    oneturn: '3회',
    pcode: 'KT002',
    position: '중견수',
    rbi: 2,
    run: 1,
    tb: '4',
    turn: '3',
  },
];

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
          gameTable={<MatchScoreTable data={matchData?.scoreboard} />}
        />

        {/* 주요 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <SubTitle title="주요 기록" />
          <div className="w-full">
            <KeyRecordsTable data={matchData?.etcgames} />
          </div>
        </div>
        {/* team1 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.home || 'Home Team'
              } 타자 기록`}
            />

            <div className="w-full">
              {/* <BattingRecordTable data={matchData?.hbatters} /> */}
              <BattingRecordTable data={mockBatters} />
            </div>
          </div>
        </div>
        {/* team2 타자 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.visit || 'Visit Team'
              } 타자 기록`}
            />
            <div className="w-full">
              <BattingRecordTable data={matchData?.vbatters} />
            </div>
          </div>
        </div>
        {/* team1 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.home || 'Home Team'
              } 투수 기록`}
            />
            <div className="w-full">
              <PitchingRecordTable data={matchData?.vpitchers} />
            </div>
          </div>
        </div>
        {/* team2 투수 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <div className="flex flex-col gap-2">
            <SubTitle
              title={`${
                matchData?.schedule.current.visit || 'Visit Team'
              } 투수 기록`}
            />
            <div className="w-full">
              <PitchingRecordTable data={matchData?.hpitchers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BoxScoreTab };
