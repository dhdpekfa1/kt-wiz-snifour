import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  BattingRecordTable,
  MatchScoreTable,
  PitchingRecordTable,
} from '@/features/game/components/table';
import { MatchBoard } from './components/watch-point';

import { Button } from '@/components/ui';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMatchData } from './apis/boxScore';
import {
  KeyRecordsCarousel,
  tableRows,
} from './components/carousel/KeyRecordsCarousel';
import type { BoxScoreData } from './types/BoxScoreData';

const BoxScoreTab = () => {
  const { gameDate, gameKey } = useParams<{
    gameDate: string;
    gameKey: string;
  }>();
  const [matchData, setMatchData] = useState<BoxScoreData>();

  useEffect(() => {
    const fetchMatchData = async () => {
      if (!gameDate && !gameKey) {
        const data = await getMatchData(
          '20241011',
          '33331011KTLG0'
        ); /**TODO: 최신 경기 날짜 전달 - 오늘 기준으로 경기가 있는 날짜 확인*/
        setMatchData(data);
      }
      if (gameDate && gameKey) {
        const data = await getMatchData(gameDate, gameKey);
        setMatchData(data);
      }
    };

    fetchMatchData();
  }, [gameDate, gameKey]);

  return (
    <div className="w-full flex justify-center my-20">
      <div className="w-full flex flex-col justify-center items-center">
        {/* 경로 */}
        <Breadcrumb />

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
          <div className="w-full flex flex-col items-center gap-3">
            <KeyRecordsCarousel data={matchData?.etcgames} />
            <div className="flex">
              {tableRows.map((row) => (
                <Button>{row.label}</Button>
              ))}
            </div>
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
              <BattingRecordTable data={matchData?.hbatters} />
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
              <PitchingRecordTable data={matchData?.hpitchers} />
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
              <PitchingRecordTable data={matchData?.vpitchers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BoxScoreTab };
