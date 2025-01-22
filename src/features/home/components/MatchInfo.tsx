import { useEffect, useState } from 'react';

import useGetRecentMatchScheduleQuery from '@/features/game/apis/match-schedule/RecentScheduleApi.query';
import { useGetMatchScheduleQuery } from '@/features/game/apis/match-schedule/matchScheduleApi.query';
import { cn } from '@/lib/utils';
import { useMatchStore } from '@/store/useMatchStore';
import { Link } from 'react-router';
import MatchInfoCard from './MatchInfoCard';
import RecentMatches from './RecentMatches';
import { TeamRanking } from './TeamRanking';

function MatchInfo() {
  useGetRecentMatchScheduleQuery();
  const [matchIndex, setMatchIndex] = useState<number>(0);
  const { recentMonth, currentMonth } = useMatchStore();
  const { matchData, isLoading, isSuccess, isError, error } =
    useGetMatchScheduleQuery({
      currentMonth: recentMonth || currentMonth,
    });

  useEffect(() => {
    if (isSuccess) {
      setMatchIndex(matchData.length - 1);
    }
  }, [isSuccess, matchData.length]);

  if (isError) {
    return <div>Error: {error?.toString()}</div>;
  }

  const handlePrevDay = () => {
    if (matchIndex === 0) return;
    setMatchIndex((prev) => prev - 1);
  };

  const handleNextDay = () => {
    if (matchIndex === matchData.length - 1) return;
    setMatchIndex((prev) => prev + 1);
  };

  const matchOfToday = matchData[matchIndex];

  return (
    <>
      <div
        className={cn(
          'w-full h-fit flex flex-col items-start rounded-3xl overflow-hidden bg-white',
          'md:h-96 md:flex-row',
          'lg:h-[500px]'
        )}
      >
        <MatchInfoCard>
          <MatchInfoCard.Header
            match={matchData}
            matchIndex={matchIndex}
            handlePrevDay={handlePrevDay}
            handleNextDay={handleNextDay}
            loading={isLoading}
          />
          <MatchInfoCard.Content
            match={matchData}
            matchIndex={matchIndex}
            loading={isLoading}
          />
        </MatchInfoCard>
        {/* 사이드 */}
        <div
          className={cn(
            'w-full h-40 flex',
            'md:w-[25%] md:border-l md:flex-col md:h-full'
          )}
        >
          <TeamRanking />
          <RecentMatches
            match={matchData}
            matchOfToday={matchOfToday}
            loading={isLoading}
          />
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <Link
          to="/game/regular/schedule"
          className={cn(
            'rounded bg-white bg-opacity-10 text-white hover:bg-opacity-100 hover:text-black text-xs px-2 py-1 transition-colors duration-300',
            'lg:text-base lg:px-4 lg:py-2'
          )}
        >
          더 많은 경기보기
        </Link>
      </div>
    </>
  );
}

export { MatchInfo };
