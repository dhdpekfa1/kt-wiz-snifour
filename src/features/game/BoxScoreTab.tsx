import { Breadcrumb, SubTitle } from '@/features/common';
import {
  BattingRecordTable,
  KeyRecordsCard,
  MatchBoard,
  MatchScoreTable,
  PitchingRecordTable,
} from '@/features/game/components';
import { formatDate } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router';
import { useGetBoxscoreQuery } from './apis/boxscore/boxscoreApi.query';
import useGetRecentMatchScheduleQuery from './apis/match-schedule/RecentScheduleApi.query';

const BoxscoreTab = () => {
  const { gameDate, gameKey } = useParams<{
    gameDate: string;
    gameKey: string;
  }>();

  const [boxscoreDate, setBoxscoreDate] = useState<string | undefined>(
    gameDate
  );
  const [boxscoreKey, setBoxscoreKey] = useState<string | undefined>(gameKey);

  const {
    recentMatchData,
    loading: recentLoading,
    error: recentError,
  } = useGetRecentMatchScheduleQuery();

  useEffect(() => {
    if (recentMatchData?.data.current && !gameDate && !gameKey) {
      setBoxscoreDate(String(recentMatchData.data.current.gameDate));
      setBoxscoreKey(String(recentMatchData.data.current.gmkey));
    }
    if (gameDate && gameKey) {
      setBoxscoreDate(gameDate);
      setBoxscoreKey(gameKey);
    }
  }, [recentMatchData, gameDate, gameKey]);

  const {
    data: matchData,
    isLoading,
    isError,
    error,
  } = useGetBoxscoreQuery(boxscoreDate || '', boxscoreKey || '');

  if (isError || recentError)
    return (
      <div>
        <p>Error: {error?.message || recentError}</p>
      </div>
    );

  const handleDateChange = (direction: 'prev' | 'next') => {
    if (matchData) {
      const targetSchedule =
        direction === 'prev'
          ? matchData.schedule.prev
          : matchData.schedule.next;
      if (targetSchedule) {
        const targetDate = targetSchedule.gameDate.toString();
        const targetKey = targetSchedule.gmkey;
        window.location.href = `/game/regular/boxscore/${targetDate}/${targetKey}`;
      }
    }
  };

  return (
    <div className="w-full flex justify-center my-20">
      <div className="w-full flex flex-col justify-center items-center">
        {/* 경로 */}
        <Breadcrumb />

        {/* 경기 스코어 테이블 */}
        {isLoading || !matchData || recentLoading ? (
          <div className="bg-gray-200 animate-pulse rounded-lg w-full">
            <Skeleton height={340} className="w-full mb-10" />
          </div>
        ) : (
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
            matchDate={formatDate(
              matchData?.schedule.current.gameDate.toString()
            )}
            matchTime={matchData?.schedule.current.gtime}
            stadium={matchData?.schedule.current.stadium}
            gameTable={<MatchScoreTable data={matchData?.scoreboard} />}
            crowd={matchData?.schedule.current.crowdCn}
            onDateChange={handleDateChange}
            disablePrev={!matchData.schedule.prev}
            disableNext={!matchData.schedule.next}
          />
        )}

        {/* 주요 기록 */}
        <div className="flex flex-col gap-2 w-full my-10">
          <SubTitle title="주요 기록" />
          {isLoading || !matchData || recentLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {Array.from({ length: 8 }).map(() => (
                <div
                  key={Math.random()}
                  className="h-[180px] md:h-[200px] lg:h-[220px] bg-gray-200 animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : (
            <div className="w-full items-center mt-4">
              <KeyRecordsCard data={matchData} />
            </div>
          )}
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

export { BoxscoreTab };
