import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import {
  BattingRecordTable,
  MatchScoreTable,
  PitchingRecordTable,
} from '@/features/game/components/table';
import { formatDate } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router';
import { useGetBoxscoreQuery } from './apis/boxscore/boxscoreApi.query';
import useGetRecentMatchScheduleQuery from './apis/match-schedule/RecentScheduleApi.query';
import KeyRecordsCard from './components/card/KeyRecordsCard';
import { MatchBoard } from './components/common';

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
      if (direction === 'prev') {
        const prevDate = matchData.schedule.prev.gameDate.toString();
        const prevKey = matchData.schedule.prev.gmkey;
        window.location.href = `/game/regular/boxscore/${prevDate}/${prevKey}`;
      } else {
        const nextDate = matchData?.schedule.next.gameDate.toString();
        const nextKey = matchData?.schedule.next.gmkey;
        window.location.href = `/game/regular/boxscore/${nextDate}/${nextKey}`;
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
            <Skeleton
              height={20}
              width="100%"
              className="bg-gray-200 animate-pulse"
            />
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
