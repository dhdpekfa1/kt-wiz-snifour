import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import RecentMatches from './RecentMatches';
import { TeamRanking } from './TeamRanking';
import { useGetMatchScheduleQuery } from '@/features/game/apis/match-schedule/matchScheduleApi.query';
import MatchInfoCard from './MatchInfoCard';
import useGetRecentMatchScheduleQuery from '@/features/game/apis/match-schedule/RecentScheduleApi.query';
import { useMatchStore } from '@/store/useMatchStore';

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
  );
}

export { MatchInfo };
